<template>
  <h2>Top artists</h2>
  <template v-if="lastfmUser">
    <div class="chart-wrapper">
      <canvas id="artist-chart" :class="{ hidden: !data }"></canvas>
      <p class="loading" v-if="!data">Loading... ({{ loadProgress }}/{{ totalWeeks }})</p>
    </div>
  </template>
  <template v-else>
    <p class="warn">You haven't set your Last.fm username.</p>
  </template>
</template>

<script lang="ts">
  import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
  import { LastfmApiKey } from "@/data/injections";
  import { useStore } from "vuex";

  import Chart from "chart.js/auto";
  import "chartjs-adapter-moment";

  interface ChartData {
    weeks: Date[];
    dataMap: Map<string, number[]>;
  }

  export default defineComponent({
    name: "TopArtistsChart",

    setup() {
      const store = useStore();

      const lastfmUser = computed(() => store.state.lastfmUsername);

      const lastfm = inject(LastfmApiKey);
      if (!lastfm) throw new Error("No LastfmApi injected");

      const data = ref<ChartData | null>(null);
      const loadProgress = ref<number>(0);
      const totalWeeks = ref<number>(NaN);

      const dataFetch = async () => {
        const now = new Date(Date.now());

        const info = await lastfm.value.user.getInfo({ user: lastfmUser.value });

        const topArtistData = await lastfm.value.user.getTopArtists({ user: info.user.name, period: "overall" });
        const topN = topArtistData.topartists.artist.slice(0, 20);

        const weeks = new Array<Date>();
        const dataMap = new Map<string, number[]>();

        // Add initial empty arrays
        topN
          .map((a) => a.name)
          .filter((n) => n !== undefined)
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          .forEach((n) => dataMap.set(n!, []));

        const startDate = new Date(Number(info.user.registered.unixtime) * 1000);
        startDate.setUTCHours(0, 0, 0, 0);

        const endDate = new Date(now);
        endDate.setUTCHours(0, 0, 0, 0);

        const fetchPoints = [];
        {
          let point = new Date(startDate);
          for (; point <= endDate; point.setDate(point.getDate() + 7)) {
            fetchPoints.push(new Date(point));
          }

          const weekPastEnd = new Date(endDate);
          weekPastEnd.setDate(weekPastEnd.getDate() + 7);

          if (point < weekPastEnd) {
            fetchPoints.push(new Date(endDate));
          }
        }
        totalWeeks.value = fetchPoints.length;

        for (const date of fetchPoints) {
          console.log(`Fetched data from ${startDate} to ${date}`);
          const weekInfo = await lastfm.value.user.getWeeklyArtistChart({
            user: info.user.name,
            from: `${startDate.getTime() / 1000}`,
            to: `${date.getTime() / 1000}`,
          });

          // TODO: is mbid comparison fine?
          const relevant = weekInfo.weeklyartistchart.artist.filter((a) => topN.some((b) => a.name === b.name));
          console.log(date, relevant);

          weeks.push(new Date(date));
          for (const artist of topN) {
            if (artist.name) {
              let plays = 0;
              for (const data of relevant) {
                if (data.name === artist.name) {
                  plays = Number(data.playcount ?? 0);
                  break;
                }
              }

              dataMap.get(artist.name)?.push(plays);
            }
          }

          loadProgress.value++;
        }

        data.value = { weeks, dataMap };
      };

      onMounted(() => {
        if (lastfmUser.value) dataFetch();
      });

      watch(lastfmUser, () => {
        window.location.reload();
      });

      watch(data, (newValue) => {
        if (newValue) {
          const chartElement = document.querySelector<HTMLCanvasElement>("#artist-chart");
          if (!chartElement) throw new Error("Chart element not found");

          const colorArray = [
            "#5899DA",
            "#E8743B",
            "#19A979",
            "#ED4A7B",
            "#945ECF",
            "#13A4B4",
            "#525DF4",
            "#BF399E",
            "#6C8893",
            "#EE6868",
            "#2F6497",
          ];
          const fillArray = colorArray.map((c) => `${c}11`);

          let colorIndex = 0;
          const datasets = Array.from(newValue.dataMap, ([key, value]) => ({ key, value })).map((kv) => {
            const index = colorIndex++ % colorArray.length;

            return {
              label: kv.key,
              data: kv.value,
              fill: "origin",

              color: colorArray[index],
              borderColor: colorArray[index],
              backgroundColor: fillArray[index],
            };
          });

          const chart = new Chart(chartElement, {
            type: "line",
            data: {
              labels: newValue.weeks,
              datasets,
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: "nearest",
              },
              scales: {
                x: {
                  type: "time",
                  time: {
                    unit: "month",
                  },
                },
              },

              plugins: {
                tooltip: {
                  position: "nearest",
                },
              },
            },
          });
        }
      });

      return {
        lastfmUser,

        data,
        loadProgress,
        totalWeeks,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  .chart-wrapper
    background-color white
    padding 5px
    border-radius 8px
    min-height 500px

    display flex
    flex-direction column
    justify-content center

  .hidden
    display none

  .loading
    color black
    margin 0 auto
    user-select none
</style>
