import { CheckSquare } from 'lucide-react';

const Section5c = () => {
  return (
    <section className="w-full px-16 py-28 bg-white flex flex-col md:flex-row gap-20">
      {/* Left Image Section */}
      <div className="relative flex-1">
        <div className="w-full h-[640px] rounded-xl bg-[#002299] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00429A] mix-blend-color" />
          
          {/* Circular Overlays */}
          <div className="absolute top-[69px] left-[57px]">
            <div className="w-[502px] h-[501px] rounded-[400px] bg-white/10 border border-black/10 backdrop-blur-[20px] shadow-[0_4px_32px_rgba(0,0,0,0.02)]" />
          </div>
          
          <div className="absolute top-[177px] left-[87px]">
            <div className="w-[328px] h-[327px] rounded-[400px] bg-white/10 border border-black/10 backdrop-blur-[20px] shadow-[0_4px_32px_rgba(0,0,0,0.02)]" />
          </div>
          
          <div className="absolute top-[177px] left-[177px]">
            <div className="w-[148px] h-[147px] rounded-[400px] bg-white/10 border border-black/10 backdrop-blur-[20px] shadow-[0_4px_32px_rgba(0,0,0,0.02)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <i data-lucide="navigation" className="w-16 h-16 text-white"></i>
            </div>
          </div>

          {/* Calendar Icons */}
          <div className="absolute top-[9px] right-[77px] w-[78px] h-[78px] bg-white rounded-3xl flex items-center justify-center">
            <i data-lucide="calendar" className="w-10 h-10 text-[#4285F4]"></i>
          </div>

          <div className="absolute bottom-[83px] right-[83px] w-[83px] h-[83px] bg-[#333]" />
          <div className="absolute bottom-[237px] left-[57px] w-[86px] h-[86px] bg-[#333]" />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-[44px] text-[#002152] font-poppins leading-tight tracking-[-0.4px]">
              Seamless Integration
            </h2>
            <p className="text-[#5B626D] text-lg">
              Connect and integrate with platforms you already use, automate repetitive tasks, and keep everything organized in one place.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Google Calendar integration',
              'Automated report generation',
              'Client progress tracking',
              'Resource management system'
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckSquare className="w-4 h-4 text-[#4670EC]" />
                <span className="text-[#5B626D] text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5c;