import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cxBind from 'classnames/bind';

// STYLES
import styles from '@/styles/policy.module.scss';

const cx = cxBind.bind(styles);

export const DeleteDataPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={cx('cPage')}>
            <main className={cx('cMain')}>
                <header className={cx('cHeader')}>
                    <div className={cx('cHeader__eyebrow')}>BREWLINGO</div>
                    <h1 className={cx('cHeader__title')}>{t('deleteData.title')}</h1>
                    <p className={cx('cHeader__intro')}>{t('deleteData.intro')}</p>
                </header>

                <div className={cx('cSections')}>
                    <section className={cx('cSection')}>
                        <div className={cx('cSection__stepNum')}>1</div>
                        <div className={cx('cSection__body')}>
                            <h2 className={cx('cSection__stepTitle')}>
                                {t('deleteData.section1Title')}
                            </h2>
                            <p className={cx('cSection__stepBody')}>
                                {t('deleteData.section1Content')}
                            </p>
                        </div>
                    </section>

                    <section className={cx('cSection')}>
                        <div className={cx('cSection__stepNum')}>2</div>
                        <div className={cx('cSection__body')}>
                            <h2 className={cx('cSection__stepTitle')}>
                                {t('deleteData.section2Title')}
                            </h2>
                            <p className={cx('cSection__stepBody')}>
                                {t('deleteData.section2Content')}
                            </p>
                        </div>
                    </section>

                    <section className={cx('cSection')}>
                        <div className={cx('cSection__stepNum')}>3</div>
                        <div className={cx('cSection__body')}>
                            <h2 className={cx('cSection__stepTitle')}>
                                {t('deleteData.section3Title')}
                            </h2>
                            <p className={cx('cSection__stepBody')}>
                                {t('deleteData.section3Content')}
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};
