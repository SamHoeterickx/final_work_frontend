import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router'
import { initI18n } from './i18n'

const localeFromPath = (window.location.pathname || '').split('/')?.[1];

// Initialize i18n based on URL locale, then mount app
initI18n(localeFromPath).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterApp />
    </StrictMode>,
  )
})
