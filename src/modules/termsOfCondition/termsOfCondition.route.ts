import { createRoute, redirect } from '@tanstack/react-router';

// MODULES
import i18n from '@/i18n';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { TermsOfConditionPage } from './page/TermsOfCondition.page';

// CONSTANTS
import { TERMS_OF_CONDITION_PATH } from './termsOfCondition.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

const isValidLocale = (locale: any): locale is 'en' | 'nl' | 'fr' => {
    return VALID_LOCALES.includes(locale);
};

export const TERMS_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: TERMS_OF_CONDITION_PATH,
    component: TermsOfConditionPage,
    beforeLoad: async({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }

        await i18n.changeLanguage(params.locale);
        document.title = `${i18n.t('termsOfCondition.pageTitle')} | BrewLingo`;
    },
});
