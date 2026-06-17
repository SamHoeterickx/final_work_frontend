import {type FC } from 'react';
import cxBind from 'classnames/bind';

// STYLES
import styles from './signUp.module.scss';
const cx = cxBind.bind(styles);


export const SignUpPage: FC = () => {
    return (
        <div className={cx('cSignUp')}>
            <h1>SignUp </h1>           
        </div>
    )
}