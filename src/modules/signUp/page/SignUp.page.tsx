import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import cxBind from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';

// CONST
import { PRIVACY_POLICY_PATH } from '@/modules/privacyPolicy/privacyPolicy.const';
import { TERMS_OF_CONDITION_PATH } from '@/modules/termsOfCondition/termsOfCondition.const';

// STYLES
import styles from './signUp.module.scss';
const cx = cxBind.bind(styles);

// TYPES
import type { ISignUpForm } from '@/shared/types/types';
import { EPlatform } from '@/shared/types/enum';

export const SignUpPage: FC = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [peopleCount, setPeopleCount] = useState<number>(0);
    const [formData, setFormData] = useState<ISignUpForm>({
        email: null,
        platform: null,
        accepted: false,
    });

    const { t } = useTranslation();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.accepted || !formData.email || !formData.platform) {
            setIsError(true);
            setError(`${t('signUp.errors.form')}`);
        }

        setPeopleCount((prev) => prev + 1)
        console.log('---FormData', formData);
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
                    <form className={cx('cForm__wForm')} onSubmit={handleForm}>
                        <div className={cx('cForm__wForm__cInput')}>
                            <label htmlFor="email" className={cx('cForm__wForm__cInput__label')}>
                                {t('signUp.inputs.email')}
                            </label>
                            <input
                                className={cx('cForm__wForm__cInput__emailInput')}
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={cx('cForm__wForm__cInput')}>
                            <label htmlFor="platform" className={cx('cForm__wForm__cInput__label')}>
                                {t('signUp.inputs.platform')}
                            </label>
                            <select
                                className={cx('cForm__wForm__cInput__platformInput')}
                                name="platform"
                                id="platform"
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
                            <label htmlFor="accepted" className={cx('cForm__wForm__cInput__label')}>
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

                    {!isError && renderPeopleCount()}
                </div>
            </section>
        </div>
    );
};
