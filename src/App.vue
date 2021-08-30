<template>
  <div id="page-container">
    <header>
      <h1>musictools</h1>
      <section id="navbar">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>

        <div id="user-container" @click="spotifyLogin">
          <template v-if="isSignedIn">Signed in as {{ username }}</template>
          <template v-else>Not signed in</template>
        </div>
      </section>
      <hr />
    </header>

    <OctocatCorner />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, provide, ref, shallowRef, watch } from "vue";
  import { useStore } from "vuex";

  import { SpotifyWebApi } from "spotify-web-api-ts";
  import { PrivateUser } from "spotify-web-api-ts/types/types/SpotifyObjects";

  import OctocatCorner from "@/components/OctocatCorner.vue";

  import { SpotifyApiKey, SpotifyCurrentUserKey } from "@/data/injections";

  export default defineComponent({
    components: { OctocatCorner },

    setup() {
      const store = useStore();

      // TODO: make this a build environment variable
      const spotifyClientId = "6bebebaf68e407eab01ea7ca182a81a";

      const spotifyToken = computed(() => store.state.spotifyAccessToken);

      onMounted(() => store.dispatch("loadSpotifyToken"));

      const spotifyLogin = () => store.dispatch("getNewSpotifyToken");

      const spotifyApi = shallowRef(new SpotifyWebApi({ clientId: spotifyClientId }));
      const spotifyCurrentUser = ref<PrivateUser | null>(null);

      const fetchState = (api: SpotifyWebApi) => {
        api.users
          .getMe()
          .then((user) => (spotifyCurrentUser.value = user))
          .catch((e) => console.error(e));
      };

      // TODO: put state in Vuex store, should remove the need for this
      // fetchState(spotifyApi.value);

      watch(spotifyToken, (newValue) => {
        console.log("token changed to", newValue);

        if (newValue) {
          const api = new SpotifyWebApi({
            clientId: spotifyClientId,
            accessToken: newValue,
          });

          fetchState(api);

          spotifyApi.value = api;
        }
      });

      provide(SpotifyApiKey, spotifyApi);
      provide(SpotifyCurrentUserKey, spotifyCurrentUser);

      return {
        spotifyLogin,

        isSignedIn: computed(() => spotifyCurrentUser.value !== null),
        username: computed(() => spotifyCurrentUser.value?.display_name),
      };
    },
  });
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&display=swap');

  html
    /* https://uigradients.com/#eXpresso */
    //background -webkit-linear-gradient(to bottom, #ad5389, #3c1053) /* Chrome 10-25, Safari 5.1-6 */
    //background linear-gradient(to bottom, #ad5389, #3c1053)

    //background linear-gradient(135deg, #ad5389, #3c1053)
    //background-size 400% 400%
    //
    //animation backgroundGradient 30s ease infinite
    // TODO: re-add background after fixing scroll

    background-color #663399

    margin 0
    height 100vh

  #app
    font-family 'Open Sans', sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

    color white

  #page-container
    max-width 600px
    margin 40px auto
    background-color rgba(0, 0, 0, 0.3)
    padding 40px

  h1
    margin 0

  #navbar
    display flex
    flex-direction row
    justify-content space-between

    nav
      display flex
      flex-direction row
      column-gap 1em

  #user-container
    text-decoration underline
    cursor pointer

  hr
    margin 20px 0
    border none
    border-top 1px solid white

  a
    color inherit

  button
    padding 10px
    border none
    border-radius 4px
    cursor pointer

    background-color white
    color black

    font-size inherit
    font-weight bold

  @keyframes backgroundGradient
    0%
      background-position: 0 50%

    50%
      background-position: 100% 50%

    100%
      background-position: 0 50%
</style>
