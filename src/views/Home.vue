<template>
  <PlaylistShuffle />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import PlaylistShuffle from "@/views/shuffle/PlaylistShuffle.vue";

  export default defineComponent({
    name: "Home",
    components: {
      PlaylistShuffle,
    },
  });
</script>
