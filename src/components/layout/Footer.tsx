import { Link } from "react-router-dom"
import CTABg from "@/assets/imgs/cta-bg.png"
import BrandLogo from "@/assets/imgs/GPSTOTECH-Logo.svg"

export function Footer() {
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
      className="relative bg-cover bg-center bg-no-repeat w-full px-16 py-20" 
      aria-labelledby="footer-heading"
      style={{ 
        backgroundImage: `url(${CTABg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-800 opacity-60 bg-blend-overlay " 
      
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex flex-col gap-8">
            <div className="w-[187px] h-[34px]">
              <img src={BrandLogo} alt="GPSTOTECH Logo" className="w-full h-full object-contain brightness-0 invert ml-[-10px]" />
            </div>
            
            <div className="flex gap-8 flex-wrap font-poppins">
              <a href="#benefits" onClick={(e) => handleSmoothScroll(e, 'benefits')} className="text-white hover:text-white/80">Benefits</a>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-white hover:text-white/80">Features</a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} className="text-white hover:text-white/80">How it works</a>
              <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-white hover:text-white/80">Testimonials</a>
            </div>
          </div>

          <div className="w-full lg:w-[400px]">
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

              <p className="text-xs text-white/50 font-poppins ">
                By subscribing you agree to with our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="h-px bg-[#E0E0E0]/20" />
          
          <div className="mt-8 flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex gap-6 flex-wrap font-poppins">
              <Link to="/privacy-policy" className="text-sm text-white hover:text-white/80">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-white hover:text-white/80">
                Terms of Service
              </Link>
              <button className="text-sm text-white hover:text-white/80">
                Cookies Settings
              </button>
            </div>

            <p className="text-sm text-white font-poppins">
              © 2025 GPSTOTECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 