import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TranslationProvider } from './hooks/useTranslation.js'

if (window.location.pathname.endsWith('/admin/')) {
  window.location.replace(`${window.location.pathname}index.html`);
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </StrictMode>,
  )
}
