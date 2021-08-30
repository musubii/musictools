<template>
  <div class="playlist-card">
    <img :src="source.images[0]?.url" alt="" />
    {{ source.name }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import { SimplifiedPlaylist } from "spotify-web-api-ts/types/types/SpotifyObjects";

  export default defineComponent({
    name: "PlaylistCard",
    props: {
      source: {
        type: Object as () => SimplifiedPlaylist,
        required: true,
      },
    },

    setup() {
      void 0;
    },
  });
</script>

<style lang="stylus" scoped>
  .playlist-card
    border-radius 8px
    background-color #191414

    font-size 90%
    font-weight 600

    padding 10px
    max-width 150px

    cursor pointer

    img
      width 150px
      height 150px
      object-fit cover
</style>
