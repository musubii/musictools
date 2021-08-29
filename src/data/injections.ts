import { InjectionKey, Ref } from "vue";

import { SpotifyWebApi } from "spotify-web-api-ts";

export const SpotifyApiKey: InjectionKey<Ref<SpotifyWebApi>> = Symbol("SpotifyWebApi");
