import { createRoute, redirect } from '@tanstack/react-router';

// MODULES
import i18n from '@/i18n';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { PrivacyPolicyPage } from './page/PrivacyPolicy.page';

// CONSTANTS
import { PRIVACY_POLICY_PATH } from './privacyPolicy.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

const isValidLocale = (locale: any): locale is 'en' | 'nl' | 'fr' => {
    return VALID_LOCALES.includes(locale);
};

export const PRIVACY_POLICY_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: PRIVACY_POLICY_PATH,
    component: PrivacyPolicyPage,
    beforeLoad: async ({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }

        await i18n.changeLanguage(params.locale);
        document.title = `${i18n.t('privacyPolicy.pageTitle')} | BrewLingo`;
    },
});
