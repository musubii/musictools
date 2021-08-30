<template>
  <h3>Step 1</h3>
  <h4>Select a source</h4>

  <SpotifyShelf />

  <p>(more tools coming soon 🙂)</p>
</template>

<script lang="ts">
  import { computed, defineComponent, inject, watch } from "vue";
  import { useStore } from "vuex";

  import SpotifyShelf from "@/components/SpotifyShelf.vue";
  import { ShuffleGotoStepKey } from "@/data/injections";

  export default defineComponent({
    name: "PlaylistShuffleStep1",
    components: { SpotifyShelf },

    setup() {
      const store = useStore();

      const selectedTrackSource = computed(() => store.state.selectedTrackSource);

      const gotoStep = inject(ShuffleGotoStepKey);
      if (!gotoStep) throw new Error("No ShuffleGotoStep function injected");

      watch(selectedTrackSource, (newValue) => {
        if (newValue !== null) {
          gotoStep(2);
        }
      });
    },
  });
</script>
