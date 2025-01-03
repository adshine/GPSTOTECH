import { CheckSquare } from 'lucide-react';

const Section5b = () => {
  return (
    <div className="flex px-16 py-28 bg-white gap-20">
      {/* Left Content */}
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[44px] text-[#002252] font-poppins leading-tight tracking-[-0.4px]">
              Career Planning & Resources
            </h2>
            <p className="text-[#5B626D] text-lg">
              Access detailed information for over 35 tech careers with comprehensive transition planning.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[440px]">
            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Detailed tech career descriptions and requirements
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Comprehensive assessment reports
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Actionable transition plans
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Resource libraries for each career path
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-[616px] h-[640px] bg-[#002252] overflow-hidden">
        <div className="absolute w-[502px] h-[501px] left-[57px] top-[69px] rounded-[400px] bg-white/10 border border-black/10 backdrop-blur-lg shadow-lg" />
        
        <div className="absolute left-[68px] top-[84px] flex flex-col gap-[17px]">
          <div className="w-[473px] h-[473px] rounded-full bg-[#87A9FF] shadow-lg backdrop-blur-lg" />
          <div className="w-[473px] h-[473px] rounded-full bg-[#C1F1F1] shadow-lg backdrop-blur-[50px] rotate-[-114deg] translate-x-[549px] translate-y-[118px]" />
          <div className="w-[473px] h-[473px] rounded-full bg-gradient-to-br from-[#4BACF1] to-[#1249E9] shadow-lg backdrop-blur-lg rotate-[127deg] translate-x-[191px] translate-y-[568px]" />
          
          <div className="absolute w-[190px] h-[190px] left-[145px] top-[141px] rounded-[104px] bg-[#333] shadow-lg" />
          
          <div className="absolute left-[156px] top-[296px] bg-white rounded-[32px] py-2 px-4">
            <p className="text-base">Sam's Assessment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5b;