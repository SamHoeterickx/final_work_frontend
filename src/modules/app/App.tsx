import { Outlet } from "@tanstack/react-router";
import type { FC, PropsWithChildren } from "react";

export const App: FC<PropsWithChildren> = () => {
    return <Outlet />
}