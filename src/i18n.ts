import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

// TYPES
import { ELocales } from '@shared/types/enum';

function resolveLocaleImport(language: string) {
    switch (language) {
        case ELocales.NL:
            return import('@/locales/nl.translation.json');
        case ELocales.EN:
            return import('@/locales/en.translation.json');
        case ELocales.FR:
            return import('@/locales/fr.translation.json');
        default:
            return import('@/locales/nl.translation.json');
    }
}

export function initI18n(language?: string) {
    return i18n
        .use(resourcesToBackend((lng: string) => resolveLocaleImport(lng)))
        .use(initReactI18next)
        .init({
            lng: language ?? ELocales.NL,
            fallbackLng: ELocales.NL,
            interpolation: { escapeValue: false },
        });
}

export default i18n;
