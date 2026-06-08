import { createRoute } from '@tanstack/react-router';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { NotFoundPage } from './page/NotFound.page';

export const WILDCARD_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFoundPage,
    beforeLoad: () => (
        document.title = '404 Not Found | BrewLingo'
    )
});
