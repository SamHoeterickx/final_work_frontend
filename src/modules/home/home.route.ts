import { createRoute, redirect } from '@tanstack/react-router';

// MODULES
import i18n from '@/i18n';

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
    beforeLoad: async ({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }

        await i18n.changeLanguage(params.locale);
        document.title = `${i18n.t('home.pageTitle')} | BrewLingo`;
    },
});
