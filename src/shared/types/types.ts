import type { ELocales, EPlatform } from "./enum";

export interface ISignUpForm {
    email: string | null;
    platform: EPlatform | null;
    accepted: boolean;
}

export interface ISubscribeEarlySignupCredentials {
    email: string;
    platform: EPlatform;
    language: ELocales;
}