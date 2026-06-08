import { rootRoute } from '@/router';
import { createRoute, redirect } from '@tanstack/react-router';
import { TermsOfConditionPage } from './page/TermsOfCondition.page';
import { TERMS_OF_CONDITION_PATH } from './termsOfCondition.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

const isValidLocale = (locale: any): locale is 'en' | 'nl' | 'fr' => {
    return VALID_LOCALES.includes(locale);
};

export const TERMS_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: TERMS_OF_CONDITION_PATH,
    component: TermsOfConditionPage,
    beforeLoad: ({ params }) => {
        if (!isValidLocale(params.locale)) {
            throw redirect({ to: '/*' });
        }
    },
});
