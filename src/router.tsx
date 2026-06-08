import React from 'react';
import { createRouter, RouterProvider, createRootRoute } from '@tanstack/react-router';

// COMPONENTS
import { App } from './modules/app/App';

// ROUTES
import { HOME_ROUTE } from '@modules/home/home.route';
import { PRIVACY_POLICY_ROUTE } from '@modules/privacyPolicy/privacyPolicy.route';
import { TERMS_ROUTE } from '@modules/termsOfCondition/termsOfCondition.route';
import { INDEX_ROUTE } from '@modules/app/index.route';
import { WILDCARD_ROUTE } from '@modules/notFound/notFound.route';

export const rootRoute = createRootRoute({
    component: App,
});

const routeTree = rootRoute.addChildren([
    INDEX_ROUTE,
    HOME_ROUTE,
    PRIVACY_POLICY_ROUTE,
    TERMS_ROUTE,
    WILDCARD_ROUTE,
]);

export const router = createRouter({
    routeTree,
});

export const RouterApp: React.FC = () => {
    return <RouterProvider router={router} />;
};
