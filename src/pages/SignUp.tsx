import { SignUpForm } from "@/components/auth/SignUpForm";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import LogoSvg from '@/assets/imgs/GPSTOTECH-Logo.svg';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const perks = [
  {
    badge: "ASSESSMENT SUITE",
    title: "Comprehensive Assessment Suite",
    description: "Four powerful assessments that evaluate suitability, career matching, training paths, and potential barriers for your clients."
  },
  {
    badge: "ANALYTICS",
    title: "Insightful Analytics Dashboard",
    description: "Track and analyze client demographics, assessment metrics, and success patterns with comprehensive reporting tools."
  },
  {
    badge: "INTEGRATION",
    title: "Seamless Integration",
    description: "Connect with platforms you already use including Google Calendar, automated reports, and resource management systems."
  }
];

export default function SignUp() {
  const [currentPerk, setCurrentPerk] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPerk((prev) => (prev + 1) % perks.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Sign Up - GPS to Tech"
        description="Create your account to start using GPS to Tech's career guidance platform"
      />
      <div className="min-h-screen flex">
        {/* Left Column - Form */}
        <div className="w-full lg:w-[480px] p-8 flex flex-col">
          <div className="flex-1">
            <Link to="/" className="inline-block mb-12">
              <img 
                src={LogoSvg} 
                alt="GPSTOTECH Logo" 
                className="h-8"
              />
            </Link>

            <div className="mb-8">
              <h1 className="text-2xl font-poppins font-semibold text-[#002252] mb-2">
                Create your account
              </h1>
              <p className="text-gray-600">
                Start your journey with GPS to Tech
              </p>
            </div>

            <SignUpForm />

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link 
                  to="/auth/login" 
                  className="text-primary hover:text-primary/90 font-medium"
                  style={{ color: '#1249E9' }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Perks Carousel */}
        <div className="hidden lg:block flex-1 relative bg-[#1249E9]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop")',
              opacity: 0.2,
              mixBlendMode: 'overlay'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPerk}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center max-w-md"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm mb-4">
                  {perks[currentPerk].badge}
                </div>
                <h2 className="text-4xl font-semibold mb-4">
                  {perks[currentPerk].title}
                </h2>
                <p className="text-white/90 text-lg">
                  {perks[currentPerk].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {perks.map((_, index) => (
              <div 
                key={index}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  index === currentPerk ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 