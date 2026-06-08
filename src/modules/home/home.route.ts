import { createRoute, redirect } from '@tanstack/react-router';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { HomePage } from './page/Home.page';

// CONSTANTS
import { HOMEPAGE_PATH } from './home.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

const isValidLocale = (locale: any): locale is 'en' | 'nl' | 'fr' => {
    return VALID_LOCALES.includes(locale);
};

export const HOME_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: HOMEPAGE_PATH,
    component: HomePage,
    beforeLoad: ({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }
    },
});
