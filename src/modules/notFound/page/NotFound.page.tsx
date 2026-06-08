import type { FC } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import cxBind from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { HOME_REDIRECT_PATH } from '@/modules/home/home.const';

// STYLES
import styles from './notFound.module.scss';
const cx = cxBind.bind(styles);

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    const router = useRouter();

    const handleGoHome = () => {
        router.navigate({ to: '/' });
    };

    return (
        <div className={cx('cNotFound')}>
            <h1 className={cx('cNotFound__code')}>404</h1>
            <h2 className={cx('cNotFound__title')}>Page Not Found</h2>
            <p className={cx('cNotFound__message')}>{t('notFound.message')}</p>
            <Link to={HOME_REDIRECT_PATH} className={cx('cNotFound__cta')} onClick={handleGoHome}>
                {t('notFound.buttons.goHome')}
            </Link>
            <div className={cx('cNotFound__background')}></div>
        </div>
    );
};
