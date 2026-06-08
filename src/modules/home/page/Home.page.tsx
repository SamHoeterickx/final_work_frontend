import type { FC } from "react";
import { useTranslation } from "react-i18next";

import 

export const HomePage: FC = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('home.title')}</h1>
        </div>
    )
}