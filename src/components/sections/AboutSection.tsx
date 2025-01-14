import CorporateWoman from '@/assets/imgs/CorporateWoman.png';
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * 0.15; // Adjust this value to control parallax speed
      
      // Apply the transform with a slight delay for smooth effect
      imageRef.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white px-4 md:px-16 py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6 lg:w-[420px] lg:h-fit">
            <h1 className="text-[#002152] text-4xl md:text-[44px] font-normal font-poppins tracking-[-0.4px]">
              About GPS to Tech
            </h1>
            <p className="text-[#5B626D] text-lg font-roboto">
              Emerging from the challenges faced in pursuing a career in the tech industry, GPS to Tech assists career advisors in streamlining the path to tech for their clients. Our mission is to enhance accessibility to tech for individuals eager to break into the industry.
            </p>
          </div>
          
          <div className="relative flex-1 h-[400px] lg:h-[600px] bg-[#004299] overflow-hidden flex items-center">
            <div 
              ref={imageRef}
              className="absolute w-[100%] h-[120%] -top-[10%] transition-transform duration-300 ease-out will-change-transform"
              style={{
                backgroundImage: `url(${CorporateWoman})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 