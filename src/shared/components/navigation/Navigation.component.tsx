import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import cxBind from 'classnames/bind';

// CONSTANTS
import { HOME_REDIRECT_PATH } from '@/modules/home/home.const';

// STYLES
import styles from './navigation.module.scss';

const cx = cxBind.bind(styles);

export const Navigation: FC = () => {
    const { t } = useTranslation();

    return (
        <nav className={cx('cNav')}>
            <Link to={HOME_REDIRECT_PATH}>
                <img src={'images/brewlingo_logo_v2.png'} className={cx('cNav__logo')} />
            </Link>
            <div className={cx('cNav__links')}>
                <a href="#features" className={cx('cNav__link')}>
                    {t('home.nav.features')}
                </a>
                <a href="#how" className={cx('cNav__link')}>
                    {t('home.nav.how')}
                </a>
                <a href="#tech" className={cx('cNav__link')}>
                    {t('home.nav.tech')}
                </a>
            </div>
        </nav>
    );
};
