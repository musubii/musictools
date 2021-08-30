import { InjectionKey, Ref } from "vue";

import { SpotifyWebApi } from "spotify-web-api-ts";
import { PrivateUser } from "spotify-web-api-ts/types/types/SpotifyObjects";

export const SpotifyApiKey: InjectionKey<Ref<SpotifyWebApi>> = Symbol("SpotifyWebApi");
export const SpotifyCurrentUserKey: InjectionKey<Ref<PrivateUser | null>> = Symbol("SpotifyCurrentUser");

export const ShuffleGotoStepKey: InjectionKey<(step: number) => void> = Symbol("ShuffleGotoStep");
