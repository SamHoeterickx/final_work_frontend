import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root/root.routes";
import {  TermsOfConditionPage } from "./page/TermsOfCondition.page";
import { TERMS_OF_CONDITION_PATH } from "./termsOfCondition.const";

export const PRIVACY_POLICY = createRoute({
    getParentRoute: () => rootRoute,
    path: TERMS_OF_CONDITION_PATH,    
    component: () => TermsOfConditionPage
})