import { Outlet } from '@tanstack/react-router';
import type { FC, PropsWithChildren } from 'react';
import cxBind from 'classnames/bind';

// COMPONENTS
import { Footer, Navigation } from '@/shared/components';

// STYLES
import styles from './app.module.scss';
const cx = cxBind.bind(styles);

export const App: FC<PropsWithChildren> = () => {
    return (
        <div className={cx('cApp')}>
            <Navigation />
            <div className={cx('cApp__outlet')}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
