import { createRoute, redirect } from '@tanstack/react-router';

// MODULES
import i18n from '@/i18n';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { SignUpPage } from './page/SignUp.page';

// CONSTANTS
import { SIGN_UP_PATH } from './signUp.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

const isValidLocale = (locale: any): locale is 'en' | 'nl' | 'fr' => {
    return VALID_LOCALES.includes(locale);
};

export const SIGN_UP_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: SIGN_UP_PATH,
    component: SignUpPage,
    beforeLoad: async ({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }

        await i18n.changeLanguage(params.locale);
        document.title = `Sign Up | BrewLingo`;
    },
});
