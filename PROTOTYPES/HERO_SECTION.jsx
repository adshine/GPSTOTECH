import { ArrowRight } from 'lucide-react';

const Desktop2 = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-16 pt-40 flex flex-col gap-16">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-6">
        <h1 className="text-3xl md:text-[53.33px] text-center font-poppins leading-tight tracking-[-0.4px] max-w-[581px] mx-auto">
          Fastrack Your Client into the Right Tech Career
        </h1>
        
        <div className="max-w-[1021px] mx-auto flex flex-col items-center gap-6">
          <p className="text-[13.33px] text-[#5B626D] text-center max-w-[443px]">
            A Smart, Enterprise-Ready desktop application that helps Career Advisors, and Counsellors guide Clients ito the right tech roles
          </p>
          
          <button className="relative group px-5 py-2.5 min-w-[188px] h-11 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4670EC] to-[#1248E9] transform transition-transform group-hover:scale-105" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#4670EC] to-[#1248E9] rounded-full" 
                 style={{
                   WebkitMaskComposite: 'xor',
                   maskComposite: 'exclude'
                 }} />
            <span className="relative text-white font-poppins text-base flex items-center justify-center gap-2">
              Start your free trial
            </span>
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-[1312px] mx-auto h-[720px] bg-black rounded-none" />
    </div>
  );
};

export default Desktop2;