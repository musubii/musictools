<template>
  <div id="scroll-container">
    <div id="page-container">
      <header>
        <h1>musictools</h1>
        <section id="navbar">
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </nav>

          <div id="user-container">
            <template v-if="isSignedIn">
              <div class="user-info">
                <img class="avatar" :src="spotifyCurrentUser?.images[0]?.url" alt="" />
                <div class="username">
                  Signed in as <b>{{ spotifyCurrentUser?.display_name }}</b>
                </div>
              </div>
            </template>
            <div class="sign-in" @click="spotifyLogin" v-else>Click to sign in</div>
          </div>
        </section>
        <hr />
      </header>

      <OctocatCorner />
      <router-view />

      <footer>
        <p>
          Made with <a href="https://v3.vuejs.org/">Vue 3</a>. Available under the
          <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License</a>.
        </p>
      </footer>
    </div>
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
        spotifyCurrentUser,

        isSignedIn: computed(() => spotifyCurrentUser.value !== null),
        username: computed(() => spotifyCurrentUser.value?.display_name),
      };
    },
  });
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&display=swap');

  html, body
    margin 0
    padding 0

  html
    /* https://uigradients.com/#eXpresso */
    background -webkit-linear-gradient(to bottom, #ad5389, #3c1053) /* Chrome 10-25, Safari 5.1-6 */
    background linear-gradient(to bottom, #ad5389, #3c1053)

    background linear-gradient(135deg, #ad5389, #3c1053)
    background-size 400% 400%

    animation backgroundGradient 30s ease infinite

    background-color #663399

    margin 0
    height 100vh

  #app
    font-family 'Open Sans', sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

    color white

  #scroll-container
    height 100vh
    overflow-y scroll

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

  .sign-in
    text-decoration underline
    cursor pointer
    font-weight bold

  hr
    margin 20px 0
    border none
    border-top 1px solid white

  a
    color inherit

  div p
    &:first-child
      margin 0

    &:last-child
      margin-bottom 0

    & + p
      margin-top 1em

  button
    padding 10px
    border none
    border-radius 4px
    cursor pointer

    background-color white
    color black

    font-size inherit
    font-weight bold

  footer
    text-align center
    font-size 8pt
    color lightgray
    margin-top 50px

    p
      margin 0 !important

    a
      color inherit

  .user-info
    user-select none
    background-color #101010

    padding 0.25em
    padding-right calc(0.25em + 0.5em)

    height 2.5em
    box-sizing border-box
    border-radius 1.25em

    display flex
    flex-direction row
    align-items center

    max-width 400px

    .avatar
      height 2em
      border-radius 50%
      border 1px solid black
      box-sizing border-box
      margin-right 0.5em

    .username
      margin-right 0.5em

      text-overflow ellipsis
      overflow hidden
      white-space nowrap

  .warn
    background-color rgba(255, 255, 0, 0.3)
    padding 10px

  @keyframes backgroundGradient
    0%
      background-position: 0 50%

    50%
      background-position: 100% 50%

    100%
      background-position: 0 50%
</style>
