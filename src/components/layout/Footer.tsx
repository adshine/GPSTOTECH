import { Link } from "react-router-dom"
import CTABg from "@/assets/imgs/CTA-Bg.png"
import BrandLogo from "@/assets/imgs/GPSTOTECH-Logo.svg"
import { useState } from "react"
import CookieSettings from "@/components/cookie-consent/CookieSettings"
import { getCookiePreferences, setCookiePreferences } from "@/utils/cookie"
import { AnimatePresence } from "framer-motion"
import type { CookiePreferences } from "@/components/cookie-consent/CookieConsent"

export function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const savedPreferences = getCookiePreferences();

  const handleSavePreferences = (newPreferences: CookiePreferences) => {
    setCookiePreferences(newPreferences);
    setShowCookieSettings(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20" 
      aria-labelledby="footer-heading"
      style={{ 
        backgroundImage: `url(${CTABg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-800 opacity-60 bg-blend-overlay" 
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-[140px] md:w-[187px] h-[26px] md:h-[34px]">
              <img 
                src={BrandLogo} 
                alt="GPSTOTECH Logo" 
                className="w-full h-full object-contain brightness-0 invert ml-[-10px]" 
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              />
            </div>
            
            <div className="flex gap-4 md:gap-8 flex-wrap font-poppins">
              <a href="#benefits" onClick={(e) => handleSmoothScroll(e, 'benefits')} className="text-sm md:text-base text-white hover:text-white/80">Benefits</a>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm md:text-base text-white hover:text-white/80">Features</a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} className="text-sm md:text-base text-white hover:text-white/80">How it works</a>
              <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-sm md:text-base text-white hover:text-white/80">Testimonials</a>
            </div>
          </div>

          <div className="hidden lg:block w-full lg:w-[400px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h4 className="text-white font-poppins font-normal tracking-[-0.01px]">
                  Subscribe to our newsletter
                </h4>
                <span className="px-2 py-0.5 text-xs bg-white/10 text-white rounded-full font-poppins">
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center p-1 border border-[#E0E0E0]/20 rounded-full opacity-50 cursor-not-allowed">
                <div className="flex-1 px-4 py-2">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-white placeholder-white/50 outline-none font-poppins cursor-not-allowed"
                    disabled
                  />
                </div>

                <button 
                  className="px-5 py-2.5 rounded-full bg-white/50 text-blue-600 font-poppins font-medium cursor-not-allowed"
                  disabled
                >
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-white/50 font-poppins">
                By subscribing you agree to with our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="h-px bg-[#E0E0E0]/20" />
          
          <div className="mt-6 md:mt-8 flex flex-col lg:flex-row justify-between gap-4 md:gap-6">
            <div className="flex justify-between md:justify-start gap-4 md:gap-6 flex-wrap font-poppins">
              <Link to="/privacy-policy" className="text-xs md:text-sm text-white hover:text-white/80">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs md:text-sm text-white hover:text-white/80">
                Terms of Service
              </Link>
              <button 
                onClick={() => setShowCookieSettings(true)}
                className="text-xs md:text-sm text-white hover:text-white/80"
              >
                Cookies Settings
              </button>
            </div>

            <p className="text-xs md:text-sm text-white font-poppins">
              © 2025 GPSTOTECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showCookieSettings && (
          <CookieSettings
            preferences={savedPreferences as CookiePreferences}
            onSave={handleSavePreferences}
            onClose={() => setShowCookieSettings(false)}
          />
        )}
      </AnimatePresence>
    </footer>
  )
} 