import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root/root.routes";
import {  PrivacyPolicyPage } from "./page/PrivacyPolicy.page";
import { PRIVACY_POLICY_PATH } from "./privacyPolicy.const";

export const PRIVACY_POLICY = createRoute({
    getParentRoute: () => rootRoute,
    path: PRIVACY_POLICY_PATH,    
    component: () => PrivacyPolicyPage
})