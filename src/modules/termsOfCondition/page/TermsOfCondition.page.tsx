import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cxBind from 'classnames/bind';

// STYLES
import styles from '@/styles/policy.module.scss';
const cx = cxBind.bind(styles);

export const TermsOfConditionPage: FC = () => {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('termsOfCondition.section1Title'),
            content: t('termsOfCondition.section1Content'),
        },
        {
            title: t('termsOfCondition.section2Title'),
            content: t('termsOfCondition.section2Content'),
        },
        {
            title: t('termsOfCondition.section3Title'),
            content: t('termsOfCondition.section3Content'),
        },
        {
            title: t('termsOfCondition.section4Title'),
            content: t('termsOfCondition.section4Content'),
        },
    ];

    return (
        <div className={cx('cPage')}>
            <section className={cx('cMain')}>
                <header className={cx('cHeader')}>
                    <p className={cx('cHeader__eyebrow')}>
                        {t('termsOfCondition.eyebrow', 'Juridisch')}
                    </p>
                    <h1 className={cx('cHeader__title')}>{t('termsOfCondition.title')}</h1>
                    <p className={cx('cHeader__intro')}>{t('termsOfCondition.intro')}</p>
                </header>

                <div className={cx('cSections')}>
                    {sections.map((section, i) => (
                        <section key={i} className={cx('cSection')}>
                            <div className={cx('cSection__stepNum')}>0{i + 1}</div>
                            <div className={cx('cSection__body')}>
                                <h2 className={cx('cSection__stepTitle')}>{section.title}</h2>
                                <p className={cx('cSection__stepBody')}>{section.content}</p>
                            </div>
                        </section>
                    ))}
                </div>

                <div className={cx('cFooterNote')}>
                    <span className={cx('cFooterNote__line')} />
                    <p className={cx('cFooterNote__text')}>{t('termsOfCondition.footer')}</p>
                </div>
            </section>
        </div>
    );
};
