import { rootRoute } from "@/router";
import { createRoute } from "@tanstack/react-router";
import { TermsOfConditionPage } from "./page/TermsOfCondition.page";
import { TERMS_OF_CONDITION_PATH } from "./termsOfCondition.const";

export const TERMS_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: TERMS_OF_CONDITION_PATH,
    component: TermsOfConditionPage,
});
