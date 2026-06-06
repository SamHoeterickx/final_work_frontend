import { createRootRoute } from '@tanstack/react-router'
import { App } from "../app/App";
import { HOME_ROUTE } from '../home/home.routes';

export const rootRoute = createRootRoute({
    component: App
})

export const routeTree = rootRoute.addChildren([HOME_ROUTE])