<template>
  <template v-if="currentUser">
    <h2>List of tools</h2>

    <div class="tool-list">
      <router-link to="/tools/shuffle">
        <div class="tool-item">
          <div class="tool-header">Randomize playlist order</div>
          <p class="tool-body">
            This tool randomizes the order of a playlist in place, permanently, unlike simply shuffling the playlist.
            This affects the default ordering of a playlist.
          </p>
        </div>
      </router-link>
    </div>

    <p>(more tools coming soon 🙂)</p>
  </template>
  <template v-else>
    <p class="warn">You aren't signed in yet.</p>
  </template>
</template>

<script lang="ts">
  import { defineComponent, inject } from "vue";

  import { SpotifyCurrentUserKey } from "@/data/injections";

  export default defineComponent({
    name: "Home",

    setup() {
      const currentUser = inject(SpotifyCurrentUserKey);
      if (!currentUser) throw new Error("No SpotifyCurrentUser injected");

      return {
        currentUser,
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
