import { rootRoute } from "@/router";
import { createRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "./page/PrivacyPolicy.page";
import { PRIVACY_POLICY_PATH } from "./privacyPolicy.const";

export const PRIVACY_POLICY_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: PRIVACY_POLICY_PATH,
    component: PrivacyPolicyPage,
});