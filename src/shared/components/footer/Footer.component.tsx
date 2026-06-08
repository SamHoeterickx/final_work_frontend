import { useTranslation } from 'react-i18next';
import cxBind from 'classnames/bind';
import { Link } from '@tanstack/react-router';

// STYLES
import styles from './footer.module.scss';
const cx = cxBind.bind(styles);

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={cx('cFooter')}>
            <div className={cx('cFooter__inner')}>
                <span className={cx('cFooter__brand')}>BREWLINGO</span>
                <div className={cx('cFooter__links')}>
                    <Link to={'privacyPolicy'} className={cx('cFooter__link')}>
                        {t('home.buttons.privacyPolicy')}
                    </Link>
                    <Link to={'termsOfCondition'} className={cx('cFooter__link')}>
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
