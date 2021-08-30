<template>
  <h3>Step 2</h3>
  <h4>Selected source:</h4>
  <PlaylistCard :source="selectedSource" />

  <div class="split">
    <div class="left">
      <h4>Current order:</h4>
    </div>
    <div class="right buttons">
      <button @click="shuffle">Preview shuffle</button>
      <button @click="save">Save</button>
    </div>
  </div>
  <TrackList :tracks="tracks" />
</template>

<script lang="ts">
  import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
  import { useStore } from "vuex";

  import { PlaylistItem } from "spotify-web-api-ts/types/types/SpotifyObjects";

  import PlaylistCard from "@/components/PlaylistCard.vue";
  import TrackList from "@/components/TrackList.vue";
  import { SpotifyApiKey, SpotifyCurrentUserKey } from "@/data/injections";
  import { shuffleArray } from "@/data/utilities";

  export default defineComponent({
    name: "PlaylistShuffleStep2",
    components: { TrackList, PlaylistCard },

    setup() {
      const store = useStore();

      const selectedSource = computed(() => store.state.selectedTrackSource);

      const spotify = inject(SpotifyApiKey);
      if (!spotify) throw new Error("No SpotifyWebApi instance injected");

      const currentUser = inject(SpotifyCurrentUserKey);
      if (!currentUser) throw new Error("No SpotifyCurrentUser injected");

      const tracks = ref<PlaylistItem[]>([]);

      const getTracks = async (playlistId: string) => {
        let response = await spotify.value.playlists.getPlaylistItems(playlistId);
        const items = [...response.items];

        // Pagination
        while (response.next) {
          const query = response.next?.split("?")[1];
          const queryParams = new Map<string, string>();
          for (const [key, value] of query?.split("&")?.map((kv) => kv.split("=")) ?? []) {
            queryParams.set(key, value);
          }

          response = await spotify.value.playlists.getPlaylistItems(playlistId, {
            offset: Number(queryParams.get("offset")),
            limit: Number(queryParams.get("limit")),
          });

          items.push(...response.items);
        }

        return items;
      };

      const updateTracks = () => {
        const source = selectedSource.value;
        if (source) {
          getTracks(source.id)
            .then((items) => {
              tracks.value = [...items];
            })
            .catch((e) => console.error(e));
        } else {
          tracks.value = [];
        }
      };

      onMounted(() => updateTracks());
      watch(selectedSource, () => updateTracks());

      const shuffle = () => {
        const shuffledTracks = [...tracks.value];
        shuffleArray(shuffledTracks);

        tracks.value = [...shuffledTracks];
      };

      const persistShuffle = async () => {
        const source = selectedSource.value;
        const user = currentUser.value;

        if (source) {
          const newPlaylist = await spotify.value.playlists.createPlaylist(user.id, `Shuffled: ${source.name}`, {
            public: source.public,
            collaborative: source.collaborative,
            description: source.description,
          });

          for (let i = 0; i < tracks.value.length; i += 100) {
            const window = tracks.value.slice(i, i + 100);
            await spotify.value.playlists.addItemsToPlaylist(
              newPlaylist.id,
              window.map((t) => t.track.uri)
            );
          }
        }
      };

      return {
        selectedSource,
        tracks,

        shuffle,
        save: () => {
          return persistShuffle()
            .then(() => alert("A new playlist has been added to your Spotify library."))
            .catch((e) => {
              console.error(e);
              alert(`An error occurred: ${e}`);
            });
        },
      };
    },
  });
</script>

<style lang="stylus" scoped>
  .split
    display flex
    flex-direction row
    align-items center
    justify-content space-between

  .buttons
    display flex
    flex-direction row
    column-gap 0.5em
</style>
