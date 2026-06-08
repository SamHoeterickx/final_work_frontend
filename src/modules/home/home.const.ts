import i18n from "@/i18n";
import { ELocales } from "@/shared/types/enum";

export const HOMEPAGE_PATH = '/$locale/';

const lang = Object.values(ELocales).includes(i18n.language as ELocales)
        ? i18n.language
        : ELocales.NL;
export const HOME_REDIRECT_PATH = `/${lang}/`;