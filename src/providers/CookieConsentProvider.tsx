import { createContext, useContext, ReactNode } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieConsent } from '@/components/cookie-consent/CookieConsent';
import type { CookiePreferences } from '@/components/cookie-consent/CookieConsent';

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  isConsentGiven: (type: keyof CookiePreferences) => boolean;
  updatePreferences: (preferences: CookiePreferences) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      'useCookieConsentContext must be used within a CookieConsentProvider'
    );
  }
  return context;
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const cookieConsent = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
      <CookieConsent />
    </CookieConsentContext.Provider>
  );
} 