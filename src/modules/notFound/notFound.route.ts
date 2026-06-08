import { rootRoute } from '@/router';
import { createRoute } from '@tanstack/react-router';
import { NotFoundPage } from './page/NotFound.page';

export const WILDCARD_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFoundPage,
});
