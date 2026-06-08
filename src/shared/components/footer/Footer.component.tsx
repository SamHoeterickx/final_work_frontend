import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import cxBind from 'classnames/bind';

// CONSTANTS
import { HOME_REDIRECT_PATH } from '@/modules/home/home.const';

// STYLES
import styles from './footer.module.scss';

const cx = cxBind.bind(styles);

export const Footer: FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer className={cx('cFooter')}>
            <div className={cx('cFooter__inner')}>
                <Link to={HOME_REDIRECT_PATH} className={cx('cFooter__brand')}>
                    BREWLINGO
                </Link>
                <div className={cx('cFooter__links')}>
                    <Link to={`/${i18n.language}/privacyPolicy`} className={cx('cFooter__link')}>
                        {t('home.buttons.privacyPolicy')}
                    </Link>
                    <Link to={`/${i18n.language}/termsOfCondition`} className={cx('cFooter__link')}>
                        {t('home.buttons.termsOfCondition')}
                    </Link>
                </div>
                <p className={cx('cFooter__copy')}>
                    &copy; {new Date().getFullYear()} BrewLingo. {t('home.allRightsReserved')}
                </p>
            </div>
        </footer>
    );
};
