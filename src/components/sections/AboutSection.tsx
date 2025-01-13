import CorporateWoman from '@/assets/imgs/CorporateWoman.png';

const AboutSection = () => {
  return (
    <div className="w-full bg-white px-4 md:px-16 py-28">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="flex flex-col gap-6 lg:w-[616px] justify-center">
          <h1 className="text-[#002152] text-4xl md:text-[44px] font-normal font-poppins tracking-[-0.4px]">
            About GPS to Tech
          </h1>
          <p className="text-[#5B626D] text-lg font-roboto">
            Emerging from the challenges faced in pursuing a career in the tech industry, GPS to Tech assists career advisors in streamlining the path to tech for their clients. Our mission is to enhance accessibility to tech for individuals eager to break into the industry.
          </p>
        </div>
        
        <div className="relative lg:w-[616px] h-[400px] lg:h-[640px] bg-[#004299] overflow-hidden flex items-center">
          <div 
            className="absolute w-[190%] h-[102%] -left-[55%]"
            style={{
              backgroundImage: `url(${CorporateWoman})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 