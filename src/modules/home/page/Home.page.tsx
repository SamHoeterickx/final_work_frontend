import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import cxBind from 'classnames/bind';

// CONSTANTS
import { HOME_REDIRECT_PATH } from '../home.const';

// STYLES
import styles from './home.module.scss';

const cx = cxBind.bind(styles);

export const HomePage: FC = () => {
    const { t } = useTranslation();

    const FEATURES = [
        {
            title: t('home.features.f1.title'),
            body: t('home.features.f1.body'),
        },
        {
            title: t('home.features.f2.title'),
            body: t('home.features.f2.body'),
        },
        {
            title: t('home.features.f3.title'),
            body: t('home.features.f3.body'),
        },
        {
            title: t('home.features.f4.title'),
            body: t('home.features.f4.body'),
        },
        {
            title: t('home.features.f5.title'),
            body: t('home.features.f5.body'),
        },
        {
            title: t('home.features.f6.title'),
            body: t('home.features.f6.body'),
        },
    ];

    return (
        <div className={cx('cHome')}>
            <section className={cx('cHero')}>
                <div className={cx('cHero__eyebrow')}>{t('home.hero.eyebrow')}</div>
                <h1 className={cx('cHero__title')}>{t('home.hero.title')}</h1>
                <p className={cx('cHero__sub')}>{t('home.hero.sub')}</p>
                <div className={cx('cHero__actions')}>
                    <Link to={HOME_REDIRECT_PATH} className={cx('cHero__cta')}>
                        {t('home.hero.cta')}
                    </Link>
                    <a href="#how" className={cx('cHero__ghost')}>
                        {t('home.hero.ghost')}
                    </a>
                </div>

                <div className={cx('cHero__island')}>
                    <Link to={HOME_REDIRECT_PATH}>
                        <img
                            src={'/images/moka_pot_island.png'}
                            alt="Moka pot on a floating island"
                            className={cx('cHero__islandImg')}
                        />
                    </Link>
                    <div className={cx('cHero__islandShadow')} />
                </div>

                <div className={cx('cHero__scroll')}>
                    <span className={cx('cHero__scrollLine')} />
                    <span className={cx('cHero__scrollLabel')}>{t('home.hero.scroll')}</span>
                </div>
            </section>

            <section id="features" className={cx('cFeatures')}>
                <p className={cx('cSection__label')}>{t('home.features.label')}</p>
                <h2 className={cx('cSection__title')}>{t('home.features.title')}</h2>

                <div className={cx('cFeatures__grid')}>
                    {FEATURES.map((f) => (
                        <div key={f.title} className={cx('cFeatures__card')}>
                            <div className={cx('cFeatures__header')}>
                                <img
                                    className={cx('cFeatures__header__icon')}
                                    src={'/images/floating_island.png'}
                                />
                                <h3 className={cx('cFeatures__header__cardTitle')}>{f.title}</h3>
                            </div>
                            <p className={cx('cFeatures__cardBody')}>{f.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="how" className={cx('cHow')}>
                <p className={cx('cSection__label')}>{t('home.how.label')}</p>
                <h2 className={cx('cSection__title')}>{t('home.how.title')}</h2>

                <div className={cx('cHow__steps')}>
                    {[
                        {
                            n: '01',
                            title: t('home.how.s1.title', 'Download & open'),
                            body: t(
                                'home.how.s1.body',
                                "Splash screen. First impression. You're already curious.",
                            ),
                        },
                        {
                            n: '02',
                            title: t('home.how.s2.title', 'Smart intake'),
                            body: t(
                                'home.how.s2.body',
                                'Select your hardware, your level. Your roadmap is generated on the spot.',
                            ),
                        },
                        { n: '03', title: t('home.how.s3.title'), body: t('home.how.s3.body') },
                        { n: '04', title: t('home.how.s4.title'), body: t('home.how.s4.body') },
                        { n: '05', title: t('home.how.s5.title'), body: t('home.how.s5.body') },
                    ].map((s, i) => (
                        <div
                            key={s.n}
                            className={cx('cHow__step', { 'cHow__step--alt': i % 2 === 1 })}
                        >
                            <span className={cx('cHow__stepNum')}>{s.n}</span>
                            <div className={cx('cHow__stepContent')}>
                                <h3 className={cx('cHow__stepTitle')}>{s.title}</h3>
                                <p className={cx('cHow__stepBody')}>{s.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className={cx('cQuote')}>
                <blockquote className={cx('cQuote__text')}>"{t('home.quote')}"</blockquote>
            </div>

            <section id="tech" className={cx('cTech')}>
                <p className={cx('cSection__label')}>{t('home.tech.label')}</p>
                <h2 className={cx('cSection__title')}>{t('home.tech.title')}</h2>
                <div className={cx('cTech__pills')}>
                    {[
                        'React Native',
                        'Expo',
                        'Three.js',
                        'React Three Fiber',
                        'NestJS',
                        'GraphQL',
                        'PostgreSQL',
                        'TypeScript',
                        'Zustand',
                        'TanStack Query',
                    ].map((t) => (
                        <span key={t} className={cx('cTech__pill')}>
                            {t}
                        </span>
                    ))}
                </div>
                <p className={cx('cTech__body')}>{t('home.tech.body')}</p>
            </section>

            <section className={cx('cCtaBlock')}>
                <h2 className={cx('cCtaBlock__title')}>{t('home.ctaBlock.title')}</h2>
                <p className={cx('cCtaBlock__sub')}>{t('home.ctaBlock.sub')}</p>
                <Link to={HOME_REDIRECT_PATH} className={cx('cHero__cta')}>
                    {t('home.ctaBlock.cta')}
                </Link>
            </section>
        </div>
    );
};
