import LogoSvg from '@/assets/imgs/GPSTOTECH-Logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

type Section = {
  id: string;
  visibility: number;
};

export function Header() {
  const [isInView, setIsInView] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = ['benefits', 'features', 'how-it-works', 'testimonials'];
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Hero section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Section visibility observer
  useEffect(() => {
    const calculateVisibility = (element: Element): Section => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibility = visibleHeight / element.clientHeight;

      return {
        id: element.id,
        visibility,
      };
    };

    const updateActiveSection = () => {
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null)
        .map(calculateVisibility);

      const mostVisibleSection = sections.reduce((prev, current) => 
        current.visibility > prev.visibility ? current : prev,
        { id: '', visibility: 0 }
      );

      if (mostVisibleSection.visibility > 0) {
        setActiveSection(mostVisibleSection.id);
      }
    };

    const sectionObserver = new IntersectionObserver(
      updateActiveSection,
      { 
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    // Add scroll listener
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    // Cleanup
    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          sectionObserver.unobserve(element);
        }
      });
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [sectionIds]);

  const getNavLinkStyles = (sectionId: string) => ({
    background: activeSection === sectionId 
      ? 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)' 
      : 'transparent',
    WebkitBackgroundClip: activeSection === sectionId ? 'text' : 'unset',
    WebkitTextFillColor: activeSection === sectionId ? 'transparent' : 'unset',
    color: activeSection === sectionId ? 'transparent' : '#002152',
    fontWeight: activeSection === sectionId ? '500' : '400'
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <div 
        className="max-w-[1000px] w-full mx-4"
        style={{
          borderRadius: '43px',
          border: '1px solid #FFF',
          background: 'linear-gradient(180deg, rgba(236, 236, 236, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
          boxShadow: isInView 
            ? '0px 6px 18.5px 0px rgba(255, 255, 255, 0.50) inset, 0px 4px 20px rgba(18, 73, 233, 0.1)'
            : '0px 6px 18.5px 0px rgba(255, 255, 255, 0.50) inset',
          backdropFilter: 'blur(10px)',
          transition: 'box-shadow 0.3s ease-in-out'
        }}
      >
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center">
                <img 
                  src={LogoSvg} 
                  alt="GPSTOTECH Logo"
                  className="h-6 md:h-8"
                />
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#benefits" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('benefits')}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('benefits');
                }}
              >
                Benefits
              </a>
              <a 
                href="#features" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('features')}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('how-it-works')}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
              >
                How it works
              </a>
              <a 
                href="#testimonials" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('testimonials')}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                }}
              >
                Testimonials
              </a>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/auth/login"
                className={`px-6 py-2 text-sm font-medium rounded-[20px] transition-all duration-500`}
                style={{
                  background: isInView 
                    ? 'linear-gradient(95deg, #FFFFFF 0%, #F8F9FF 100%)'
                    : 'transparent',
                  color: isInView ? '#1249E9' : '#002152',
                  boxShadow: isInView 
                    ? '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)'
                    : 'none',
                  border: isInView 
                    ? '1px solid rgba(18, 73, 233, 0.1)'
                    : '1px solid #E2E8F0'
                }}
              >
                Login
              </Link>
              <Link 
                to="/auth/signup"
                className={`px-6 py-2 text-sm font-medium rounded-[20px] border-none transition-all duration-500`}
                style={{
                  background: isInView 
                    ? 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)'
                    : 'linear-gradient(95deg, #FFFFFF 0%, #F8F9FF 100%)',
                  color: isInView ? 'white' : '#1249E9',
                  boxShadow: isInView 
                    ? 'none'
                    : '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
                  border: isInView 
                    ? 'none'
                    : '1px solid rgba(18, 73, 233, 0.1)'
                }}
              >
                Sign Up for Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#002152] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-[#002152] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-[#002152] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                <a 
                  href="#benefits" 
                  className="text-sm py-2 hover:text-[#4670EC] transition-all duration-300"
                  style={getNavLinkStyles('benefits')}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection('benefits'), 300);
                  }}
                >
                  Benefits
                </a>
                <a 
                  href="#features" 
                  className="text-sm py-2 hover:text-[#4670EC] transition-all duration-300"
                  style={getNavLinkStyles('features')}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection('features'), 300);
                  }}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-sm py-2 hover:text-[#4670EC] transition-all duration-300"
                  style={getNavLinkStyles('how-it-works')}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection('how-it-works'), 300);
                  }}
                >
                  How it works
                </a>
                <a 
                  href="#testimonials" 
                  className="text-sm py-2 hover:text-[#4670EC] transition-all duration-300"
                  style={getNavLinkStyles('testimonials')}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection('testimonials'), 300);
                  }}
                >
                  Testimonials
                </a>
                <div className="flex flex-col gap-3 pt-2">
                  <Link 
                    to="/auth/login"
                    className="px-6 py-2 text-sm font-medium rounded-[20px] text-center transition-all duration-500"
                    style={{
                      background: 'linear-gradient(95deg, #FFFFFF 0%, #F8F9FF 100%)',
                      color: '#1249E9',
                      boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(18, 73, 233, 0.1)'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/auth/signup"
                    className="px-6 py-2 text-sm font-medium rounded-[20px] text-center text-white transition-all duration-500"
                    style={{
                      background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                      boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up for Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 