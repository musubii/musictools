<template>
  <h2>List of tools</h2>

  <h3>Spotify tools</h3>
  <template v-if="spotifyUser">
    <div class="tool-list">
      <router-link to="/tools/shuffle">
        <div class="tool-item">
          <div class="tool-header">Randomize playlist order</div>
          <p class="tool-body">
            Randomizes the order of a playlist in place, permanently, unlike simply shuffling the playlist. This affects
            the default ordering of a playlist.
          </p>
        </div>
      </router-link>
    </div>

    <p>(more tools coming soon 🙂)</p>
  </template>
  <template v-else>
    <p class="warn">You aren't signed in to Spotify.</p>
  </template>

  <h3>Last.fm tools</h3>
  <div class="tool-list">
    <router-link to="/tools/artists">
      <div class="tool-item">
        <div class="tool-header">Top artists chart</div>
        <p class="tool-body">Chart visualization of your listening history</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject } from "vue";

  import { SpotifyCurrentUserKey } from "@/data/injections";

  export default defineComponent({
    name: "Home",

    setup() {
      const spotifyUser = inject(SpotifyCurrentUserKey);
      if (!spotifyUser) throw new Error("No SpotifyCurrentUser injected");

      return {
        spotifyUser,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  .tool-list
    display flex
    flex-direction column
    row-gap 10px

  a
    text-decoration none

  .tool-item
    background-color rgba(0,0,0,0.4)
    padding 15px
    border-radius 8px

  .tool-header
    font-size 140%
    font-weight bold
    text-decoration underline
</style>
