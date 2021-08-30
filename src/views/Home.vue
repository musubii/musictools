<template>
  <PlaylistShuffle v-if="currentUser" />
  <template v-else>
    <p class="warn">You aren't signed in yet.</p>
  </template>
</template>

<script lang="ts">
  import { defineComponent, inject } from "vue";

  import PlaylistShuffle from "@/views/shuffle/PlaylistShuffle.vue";
  import { SpotifyCurrentUserKey } from "@/data/injections";

  export default defineComponent({
    name: "Home",
    components: {
      PlaylistShuffle,
    },

    setup() {
      const currentUser = inject(SpotifyCurrentUserKey);
      if (!currentUser) throw new Error("No SpotifyCurrentUser injected");

      return {
        currentUser,
      };
    },
  });
</script>
