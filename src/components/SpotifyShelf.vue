<template>
  <section>
    <div class="shelf-icon">
      <img src="@/assets/images/Spotify_Logo_RGB_White.png" alt="Spotify" />
    </div>
    <div class="shelf">
      <PlaylistCard
        v-for="(playlist, index) in playlists"
        :key="index"
        :source="playlist"
        @click="selectIndex(index)"
      />
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, inject, onMounted, ref } from "vue";
  import { useStore } from "vuex";

  import { SpotifyApiKey, SpotifyCurrentUserKey } from "@/data/injections";
  import { SimplifiedPlaylist } from "spotify-web-api-ts/types/types/SpotifyObjects";
  import PlaylistCard from "@/components/PlaylistCard.vue";

  export default defineComponent({
    name: "SpotifyShelf",
    components: { PlaylistCard },
    setup() {
      const store = useStore();

      const spotify = inject(SpotifyApiKey);
      if (!spotify) throw new Error("No SpotifyWebApi instance injected");

      const currentUser = inject(SpotifyCurrentUserKey);
      if (!currentUser) throw new Error("No SpotifyCurrentUser injected");

      const playlists = ref<SimplifiedPlaylist[]>([]);

      onMounted(() => {
        const getPlaylists = async () => {
          let response = await spotify.value.playlists.getMyPlaylists();
          const items = [...response.items];

          // Pagination
          while (response.next) {
            const query = response.next?.split("?")[1];
            const queryParams = new Map<string, string>();
            for (const [key, value] of query?.split("&")?.map((kv) => kv.split("=")) ?? []) {
              queryParams.set(key, value);
            }

            response = await spotify.value.playlists.getMyPlaylists({
              offset: Number(queryParams.get("offset")),
              limit: Number(queryParams.get("limit")),
            });

            items.push(...response.items);
          }

          // TODO: move this to Step1
          return items.filter((p) => p.owner.id === currentUser.value?.id);
        };

        getPlaylists()
          .then((items) => (playlists.value = [...items]))
          .catch((e) => console.error(e));
      });

      const selectIndex = (index: number) => {
        const selectedPlaylist = playlists.value[index];
        store.commit("setTrackSource", selectedPlaylist);
      };

      return {
        playlists,

        selectIndex,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  @import "../assets/styles/shelf.styl"
</style>
