<template>
  <h2>Randomize playlist order</h2>

  <div class="warn">
    <p><b>Note</b>: This tool will create a new playlist in your library, rather than modifying the existing one.</p>
    <p>This is partially due to API limitations, and it also helps prevent bugs from ruining playlists.</p>
  </div>

  <component :is="currentComponent" />
</template>

<script lang="ts">
  import { defineComponent, inject, provide, shallowRef } from "vue";
  import PlaylistShuffleStep1 from "@/views/shuffle/PlaylistShuffleStep1.vue";
  import PlaylistShuffleStep2 from "@/views/shuffle/PlaylistShuffleStep2.vue";
  import { ShuffleGotoStepKey, SpotifyCurrentUserKey } from "@/data/injections";
  import router from "@/router";

  export default defineComponent({
    name: "PlaylistShuffle",
    components: { PlaylistShuffleStep1, PlaylistShuffleStep2 },

    setup() {
      const currentUser = inject(SpotifyCurrentUserKey);
      if (!currentUser) throw new Error("No SpotifyCurrentUser injected");

      if (currentUser.value === null) {
        router.push("/");
      }

      const currentComponent = shallowRef<unknown>(PlaylistShuffleStep1);

      const gotoStep = (step: number) => {
        switch (step) {
          case 1: {
            currentComponent.value = PlaylistShuffleStep1;
            break;
          }
          case 2: {
            currentComponent.value = PlaylistShuffleStep2;
            break;
          }
          default: {
            throw new Error(`Unknown PlaylistShuffle step ${step}`);
          }
        }
      };

      provide(ShuffleGotoStepKey, gotoStep);

      return {
        currentUser,
        currentComponent,
      };
    },
  });
</script>
