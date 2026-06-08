import { createRoute, redirect } from '@tanstack/react-router';

// ROUTES
import { rootRoute } from '@/router';

export const INDEX_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => {
        throw redirect({ to: '/nl/' });
    },
});
