import { createStore } from "vuex";
import { SimplifiedPlaylist } from "spotify-web-api-ts/types/types/SpotifyObjects";

export default createStore({
  state: {
    spotifyAccessToken: null as string | null,

    // TODO: (editable) playlist abstraction
    selectedTrackSource: null as SimplifiedPlaylist | null,
  },
  mutations: {
    setSpotifyToken(state, token: string | null) {
      state.spotifyAccessToken = token;

      if (token) localStorage.setItem("spotifyToken", token);
      else localStorage.removeItem("spotifyToken");
    },
    setTrackSource(state, source: SimplifiedPlaylist | null) {
      state.selectedTrackSource = source;
    },
  },
  actions: {
    loadSpotifyToken(store) {
      const pageFragment = window.location.hash.slice(1);
      const fragmentParams = new Map<string, string>();
      for (const [key, value] of pageFragment.split("&").map((kv) => kv.split("="))) fragmentParams.set(key, value);

      // TODO: handle token expiry (log out user?)
      const accessToken = fragmentParams.get("access_token");
      if (accessToken) {
        store.commit("setSpotifyToken", accessToken);

        // Remove hash
        setTimeout(() => {
          history.replaceState({}, document.title, ".");
        }, 0);
      } else {
        const storedToken = localStorage.getItem("spotifyToken");
        if (storedToken) {
          store.commit("setSpotifyToken", storedToken);
        }
      }
    },

    getNewSpotifyToken(store) {
      // This action never returns, as it changes window.location

      const currentLocation = window.location.href.split("?")[0].split("#")[0];

      const params = new URLSearchParams([
        ["client_id", "62bebebaf68e407eab01ea7ca182a81a"],
        ["response_type", "token"],
        ["redirect_uri", currentLocation],
        // state,
        [
          "scope",
          [
            "user-library-read",
            "user-read-playback-state",
            "user-modify-playback-state",
            "playlist-read-private",
            "playlist-modify-public",
            "playlist-modify-private",
          ].join(" "),
        ],
        ["show_dialog", "false"],
      ]);
      const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

      // TODO: We might be able to avoid a refresh here by doing this in a new tab and listening to localStorage
      window.location.href = authUrl;

      return;
    },
  },
  modules: {},
});
