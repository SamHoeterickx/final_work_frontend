import { Outlet } from "@tanstack/react-router";
import type { FC, PropsWithChildren } from "react";
import cxBind from "classnames/bind";

import styles from "./app.module.scss"
import { Footer } from "@/shared/components";
const cx = cxBind.bind(styles)

export const App: FC<PropsWithChildren> = () => {
    return (
        <div className={cx('cApp')}>
            <Outlet />
            <Footer />
        </div>
    )
}