import { useState, type FC, type ChangeEvent, type FormEvent, useEffect } from 'react';
import cxBind from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';

// CONST
import { PRIVACY_POLICY_PATH } from '@/modules/privacyPolicy/privacyPolicy.const';
import { TERMS_OF_CONDITION_PATH } from '@/modules/termsOfCondition/termsOfCondition.const';

// SERVICES
import { earlySignupService } from '@/shared/services/earlySignup.service';

// STYLES
import styles from './signUp.module.scss';
const cx = cxBind.bind(styles);

// TYPES
import type { ISignUpForm } from '@/shared/types/types';
import { ELocales, EPlatform } from '@/shared/types/enum';

export const SignUpPage: FC = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [peopleCount, setPeopleCount] = useState<number>(0);
    const [formData, setFormData] = useState<ISignUpForm>(() => {
        const saved = sessionStorage.getItem('signUpFormData');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {}
        }
        return {
            email: null,
            platform: null,
            accepted: false,
        };
    });

    const { t, i18n } = useTranslation();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };

    useEffect(() => {
        const getPeopleCount = async () => {
            try {
                const cnt = await earlySignupService.getCount();
                console.log('people count', cnt);
                setPeopleCount(typeof cnt === 'number' ? cnt : Number(cnt) || 0);
            } catch (err) {
                console.error('Failed to fetch people count', err);
            }
        };

        void getPeopleCount();
    }, []);

    useEffect(() => {
        sessionStorage.setItem('signUpFormData', JSON.stringify(formData));
    }, [formData]);

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.accepted || !formData.email || !formData.platform) {
            setIsError(true);
            setError(`${t('signUp.errors.form')}`);
            return;
        }

        const response = await earlySignupService.subscribe({
            email: formData.email,
            platform: formData.platform,
            language: i18n.language as ELocales,
        });
        console.log(response);

        if (response.data.data.subscribe) {
            setPeopleCount((prev) => prev + 1);
            console.log('---FormData', formData);
            setIsSuccess(true);
            sessionStorage.removeItem('signUpFormData');
            setFormData({ email: null, platform: null, accepted: false });
        }
    };

    const renderPeopleCount = () => {
        return (
            <div className={cx('cForm__cPeopleCount')}>
                <p className={cx('cForm__cPeopleCount__bold')}>{peopleCount}</p>
                <p className={cx('cForm__cPeopleCount__text')}>{t('signUp.people')}</p>
            </div>
        );
    };

    return (
        <div className={cx('cSignUp')}>
            <section className={cx('cMain')}>
                <header className={cx('cHeader')}>
                    <h1 className={cx('cHeader__title')}>{t('signUp.title')}</h1>
                    <p className={cx('cHeader__info')}>{t('signUp.info')}</p>
                </header>

                <div className={cx('cForm')}>
                    {isSuccess ? (
                        <div className={cx('cForm__success')}>
                            <div className={cx('cForm__success__icon')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h2 className={cx('cForm__success__title')}>
                                {t('signUp.success.title')}
                            </h2>
                            <p className={cx('cForm__success__text')}>
                                {t('signUp.success.message')}
                            </p>
                        </div>
                    ) : (
                        <form className={cx('cForm__wForm')} onSubmit={handleForm}>
                            <div className={cx('cForm__wForm__cInput')}>
                                <label
                                    htmlFor="email"
                                    className={cx('cForm__wForm__cInput__label')}
                                >
                                    {t('signUp.inputs.email')}
                                </label>
                                <input
                                    className={cx('cForm__wForm__cInput__emailInput')}
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email || ''}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={cx('cForm__wForm__cInput')}>
                                <label
                                    htmlFor="platform"
                                    className={cx('cForm__wForm__cInput__label')}
                                >
                                    {t('signUp.inputs.platform')}
                                </label>
                                <select
                                    className={cx('cForm__wForm__cInput__platformInput')}
                                    name="platform"
                                    id="platform"
                                    value={formData.platform || ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a platform</option>
                                    <option value={EPlatform.IOS}>{EPlatform.IOS}</option>
                                    <option value={EPlatform.ANDROID}>{EPlatform.ANDROID}</option>
                                </select>
                            </div>

                            <div className={cx('cForm__wForm__cCheckbox')}>
                                <input
                                    className={cx('cForm__wForm__cInput__input')}
                                    type="checkbox"
                                    name="accepted"
                                    id="accepted"
                                    checked={formData.accepted}
                                    onChange={handleInputChange}
                                />
                                <label
                                    htmlFor="accepted"
                                    className={cx('cForm__wForm__cInput__label')}
                                >
                                    {t('signUp.inputs.accepted')}{' '}
                                    <Link to={PRIVACY_POLICY_PATH}>
                                        {t('home.buttons.privacyPolicy')}
                                    </Link>{' '}
                                    {t('signUp.inputs.and')}{' '}
                                    <Link to={TERMS_OF_CONDITION_PATH}>
                                        {t('home.buttons.termsOfCondition')}
                                    </Link>
                                </label>
                            </div>

                            {isError && error && <p className={cx('cForm__error')}>{error}</p>}
                            <button className={cx('cForm__wForm__cta')} type="submit">
                                {t('signUp.buttons.notify')}
                            </button>
                        </form>
                    )}

                    {!isError && renderPeopleCount()}
                </div>
            </section>
        </div>
    );
};
