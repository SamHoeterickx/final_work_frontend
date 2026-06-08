import { rootRoute } from "@/router";
import { createRoute } from "@tanstack/react-router";
import { HomePage } from "./page/Home.page";
import { HOMEPAGE_PATH } from "./home.const";

export const HOME_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: HOMEPAGE_PATH,
    component: HomePage,
});
