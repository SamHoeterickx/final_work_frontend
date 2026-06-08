import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// MODULES
import { RouterApp } from './router';
import { initI18n } from './i18n';

// STYLES
import './styles/base.scss';

const localeFromPath = (window.location.pathname || '').split('/')?.[1];

initI18n(localeFromPath).then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <RouterApp />
        </StrictMode>,
    );
});
