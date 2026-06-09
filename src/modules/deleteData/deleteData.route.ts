import { createRoute, redirect } from '@tanstack/react-router';

// MODULES
import i18n from '@/i18n';

// ROUTES
import { rootRoute } from '@/router';

// PAGES
import { DeleteDataPage } from './page/DeleteData.page';
import { DELETE_DATA_PATH } from './deleteData.const';

const VALID_LOCALES = ['en', 'nl', 'fr'] as const;

export const DELETE_DATA_ROUTE = createRoute({
    getParentRoute: () => rootRoute,
    path: DELETE_DATA_PATH,
    component: DeleteDataPage,
    beforeLoad: async ({ params }) => {
        if (!VALID_LOCALES.includes(params.locale as any)) {
            throw redirect({ to: '/*' });
        }
        await i18n.changeLanguage(params.locale);
        document.title = `${i18n.t('deleteData.pageTitle')} | BrewLingo`;
    },
});
