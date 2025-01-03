import { ArrowRight } from 'lucide-react';

const Section8 = () => {
  return (
    <section className="relative w-full min-h-[490px] px-4 md:px-16 py-20 flex items-center justify-center bg-[#333]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/path-to-your-image.jpg")',
          filter: 'contrast(0.7) brightness(0.86) saturate(1.27)',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-[44px] font-normal text-white text-center leading-tight tracking-[-0.4px] font-poppins">
              Ready to Transform Your Career Guidance Process?
            </h2>
            <p className="text-base md:text-lg text-white text-center max-w-[565px] mx-auto font-roboto">
              Start delivering data-driven tech career guidance today. Join career advisors who are scaling their impact with confidence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <button className="relative group px-5 py-2.5 min-h-[44px] rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4670EC] to-[#1248E9]" />
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-[#4670EC] to-[#1248E9]" 
                   style={{
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }} />
              <span className="relative text-white font-poppins text-base">
                Try GPS to Tech Free for 7 Days
              </span>
            </button>
            
            <button className="relative group px-5 py-2 min-h-[40px] rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white" />
              <span className="relative text-white font-poppins text-base">
                Talks to Sales
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;