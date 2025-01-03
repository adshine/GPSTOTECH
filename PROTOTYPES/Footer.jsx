import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#333] px-16 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex flex-col gap-8">
            <div className="w-[187px] h-[34px]">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="flex gap-8 flex-wrap">
              <a href="#" className="text-white hover:opacity-80">Benefits</a>
              <a href="#" className="text-white hover:opacity-80">Features</a>
              <a href="#" className="text-white hover:opacity-80">How it works</a>
              <a href="#" className="text-white hover:opacity-80">Testimonials</a>
            </div>
          </div>

          <div className="w-full lg:w-[400px] flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-[-0.4px]">
              Subscribe to our news letter today
            </h4>

            <div className="w-full border border-white rounded-full p-1 flex">
              <div className="flex-1 px-4 py-2">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                />
              </div>

              <button className="px-5 py-2.5 rounded-full bg-gradient-to-br from-[#4670EC] to-[#1247E8] text-white border border-white">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-white opacity-80">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex gap-6 flex-wrap">
              <a href="#" className="text-sm text-white hover:opacity-80">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white hover:opacity-80">
                Terms of Service  
              </a>
              <a href="#" className="text-sm text-white hover:opacity-80">
                Cookies Settings
              </a>
            </div>

            <p className="text-sm text-white">
              © 2025 GPSTOTECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;