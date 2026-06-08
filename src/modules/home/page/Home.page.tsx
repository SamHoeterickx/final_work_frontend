import type { FC } from "react";
import { useTranslation } from "react-i18next";
import cxBind from "classnames/bind";

// STYLES
import styles from './home.module.scss';
const cx = cxBind.bind(styles);

export const HomePage: FC = () => {

    const { t } = useTranslation();

    return (
        <div className={cx('cHome')}>
            <h1>{t('home.title')}</h1>
        </div>
    )
}