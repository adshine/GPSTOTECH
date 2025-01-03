import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import CookieSettings from './CookieSettings';
import { setCookiePreferences, getCookiePreferences } from '@/utils/cookie';

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = getCookiePreferences();
    const hasPreferences = Object.keys(savedPreferences).length > 0;
    
    if (hasPreferences) {
      setPreferences(savedPreferences as CookiePreferences);
      // Check if any optional cookie is disabled
      const anyOptionalDisabled = !savedPreferences.analytics || 
                                !savedPreferences.marketing || 
                                !savedPreferences.functional;
      // Show banner if any optional cookie is disabled
      setShowBanner(anyOptionalDisabled);
    }
    
    setInitialized(true);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    setCookiePreferences(allAccepted);
    setShowBanner(false);
  };

  const handleSavePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setCookiePreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Don't render anything until we've checked the saved preferences
  if (!initialized) return null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-[#E2E8F0] shadow-lg"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#002152] mb-2">Cookie settings</h2>
                  <p className="text-[#5B626D] text-sm">
                    By clicking "Accept all cookies", you agree to storing cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts as outlined in our{' '}
                    <Link to="/privacy-policy" className="text-[#1249E9] hover:text-[#4BACF1] transition-colors">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2 text-sm font-medium rounded-[20px] border border-[#E2E8F0] bg-white text-[#1249E9] hover:bg-gray-50 transition-all duration-200"
                  >
                    Cookie settings
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 text-sm font-medium rounded-[20px] text-white transition-all duration-200"
                    style={{ 
                      background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                      boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    Accept all cookies
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <CookieSettings
            preferences={preferences}
            onSave={handleSavePreferences}
            onClose={() => setShowSettings(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 