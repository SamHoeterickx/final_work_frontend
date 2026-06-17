import type { EPlatform } from "./enum";

export interface ISignUpForm {
    email: string | null;
    platform: EPlatform | null;
    accepted: boolean;
}