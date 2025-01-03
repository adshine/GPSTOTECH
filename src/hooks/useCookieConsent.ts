import { useState, useEffect } from 'react';
import type { CookiePreferences } from '@/components/cookie-consent/CookieConsent';

const COOKIE_PREFERENCES_KEY = 'cookiePreferences';

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const isConsentGiven = (type: keyof CookiePreferences): boolean => {
    if (!preferences) return false;
    return preferences[type];
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(newPreferences));
  };

  return {
    preferences,
    isConsentGiven,
    updatePreferences,
  };
} 