<template>
  <div class="tracklist-container">
    <div v-for="(track, index) in tracks" :key="index" class="tracklist-track">
      <div class="left">
        <img :src="track.track.album.images[0]?.url" alt="" />
        {{ track.track.name }}
      </div>
      <div class="right">
        {{ track.track.album.artists.map((a) => a.name).join(", ") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  import { PlaylistItem } from "spotify-web-api-ts/types/types/SpotifyObjects";

  export default defineComponent({
    name: "TrackList",
    props: {
      tracks: {
        type: Array as PropType<PlaylistItem[]>,
        required: true,
      },
    },

    setup() {
      void 0;
    },
  });
</script>

<style lang="stylus" scoped>
  .tracklist-track
    padding 10px 0

    display flex
    flex-direction row
    align-items center
    justify-content space-between

    .left
      display flex
      flex-direction row
      align-items center

    img
      height 2em
      margin-right 1em
</style>
