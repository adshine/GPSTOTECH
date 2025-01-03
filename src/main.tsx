import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CookieConsentProvider } from '@/providers/CookieConsentProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </BrowserRouter>
  </StrictMode>,
)
