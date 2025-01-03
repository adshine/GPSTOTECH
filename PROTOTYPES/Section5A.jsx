import { CheckSquare } from 'lucide-react';

const Section5A = () => {
  return (
    <div className="flex px-16 py-28 bg-white gap-20">
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[44px] text-[#002252] font-poppins tracking-[-0.4px] leading-[53px]">
                Comprehensive Assessment Suite
              </h2>
              <p className="text-lg text-[#5B626D]">
                Four powerful assessments that evaluate suitability, career matching, training paths, and potential barriers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
                <p className="text-lg text-[#5B626D]">
                  Suitability Assessment - Evaluate tech readiness and preparation needs
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
                <p className="text-lg text-[#5B626D]">
                  Career Assessment - Match to tech specializations with required technologies
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
                <p className="text-lg text-[#5B626D]">
                  Training Route Assessment - Determine optimal education pathway
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
                <p className="text-lg text-[#5B626D]">
                  Barriers Assessment - Identify and plan around obstacles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[616px] h-[640px] bg-[#004299] bg-blend-color">
        <div className="absolute top-14 left-9 w-[544px] h-[338px] rounded-[21px] border border-white shadow-[0_42.5px_55px_18.33px_rgba(0,0,0,0.12)] bg-[#333]" />
        <div className="absolute top-[405px] left-9 w-[544px] h-[338px] rounded-[21px] border border-white shadow-[0_42.5px_55px_18.33px_rgba(0,0,0,0.12)] bg-[#333]" />
      </div>
    </div>
  );
};

export default Section5A;