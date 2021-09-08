import { InjectionKey, Ref } from "vue";

import { SpotifyWebApi } from "spotify-web-api-ts";
import { PrivateUser } from "spotify-web-api-ts/types/types/SpotifyObjects";

import LastFm from "@toplast/lastfm";

export const SpotifyApiKey: InjectionKey<Ref<SpotifyWebApi>> = Symbol("SpotifyWebApi");
export const SpotifyCurrentUserKey: InjectionKey<Ref<PrivateUser | null>> = Symbol("SpotifyCurrentUser");

export const LastfmApiKey: InjectionKey<Ref<LastFm>> = Symbol("LastfmApi");

export const ShuffleGotoStepKey: InjectionKey<(step: number) => void> = Symbol("ShuffleGotoStep");
