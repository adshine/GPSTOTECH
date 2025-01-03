import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { CookiePreferences } from './CookieConsent';

interface CookieSettingsProps {
  preferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  onClose: () => void;
}

export default function CookieSettings({ preferences, onSave, onClose }: CookieSettingsProps) {
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setLocalPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/30" onClick={onClose} />
        
        <div className="inline-block w-full max-w-2xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-50 text-[#5B626D]"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold text-[#002152] mb-6">Cookie Settings</h2>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#002152]">Necessary Cookies</h3>
                  <p className="text-sm text-[#5B626D]">
                    These cookies are required for the website to function and cannot be disabled.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={localPreferences.necessary}
                    disabled
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#4BACF1] peer-checked:to-[#1249E9] peer-disabled:opacity-70"></div>
                  <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-full shadow-sm"></div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#002152]">Analytics Cookies</h3>
                  <p className="text-sm text-[#5B626D]">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('analytics')}
                  className="relative inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    checked={localPreferences.analytics}
                    onChange={() => {}}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#4BACF1] peer-checked:to-[#1249E9]"></div>
                  <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-full shadow-sm"></div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#002152]">Marketing Cookies</h3>
                  <p className="text-sm text-[#5B626D]">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('marketing')}
                  className="relative inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    checked={localPreferences.marketing}
                    onChange={() => {}}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#4BACF1] peer-checked:to-[#1249E9]"></div>
                  <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-full shadow-sm"></div>
                </button>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#002152]">Functional Cookies</h3>
                  <p className="text-sm text-[#5B626D]">
                    These cookies enable personalized features and functionality.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('functional')}
                  className="relative inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    checked={localPreferences.functional}
                    onChange={() => {}}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#4BACF1] peer-checked:to-[#1249E9]"></div>
                  <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-full shadow-sm"></div>
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 text-sm font-medium rounded-[20px] border border-[#E2E8F0] bg-white text-[#1249E9] hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => onSave(localPreferences)}
                className="px-6 py-2 text-sm font-medium rounded-[20px] text-white transition-all duration-200"
                style={{ 
                  background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                  boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 