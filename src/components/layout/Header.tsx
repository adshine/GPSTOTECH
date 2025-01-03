import LogoSvg from '@/assets/imgs/GPSTOTECH-Logo.svg';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

type Section = {
  id: string;
  visibility: number;
};

export function Header() {
  const [isInView, setIsInView] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionIds = ['benefits', 'features', 'how-it-works', 'testimonials'];

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
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center">
                <img 
                  src={LogoSvg} 
                  alt="GPSTOTECH Logo"
                  className="h-8"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link 
                to="/#benefits" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('benefits')}
              >
                Benefits
              </Link>
              <Link 
                to="/#features" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('features')}
              >
                Features
              </Link>
              <Link 
                to="/#how-it-works" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('how-it-works')}
              >
                How it works
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-sm hover:text-[#4670EC] transition-all duration-300"
                style={getNavLinkStyles('testimonials')}
              >
                Testimonials
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
} 