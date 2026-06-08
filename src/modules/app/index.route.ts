import { rootRoute } from "@/router";
import { createRoute, redirect } from "@tanstack/react-router";

export const INDEX_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => { throw redirect({ to: '/nl/' }) }
});