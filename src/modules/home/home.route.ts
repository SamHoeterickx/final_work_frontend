import { rootRoute } from '@/router';
import { createRoute, redirect } from '@tanstack/react-router';
import { HomePage } from './page/Home.page';
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
