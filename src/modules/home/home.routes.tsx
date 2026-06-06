import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root/root.routes";
import { HomePage } from "./page/Home.page";

export const HOME_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <HomePage />
})