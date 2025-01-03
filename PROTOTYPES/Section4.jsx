import { FC } from 'react';

const Section4: FC = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-24">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-[#5B626C]">
              Features Like No Other
            </span>
            <h2 className="mt-0 text-3xl font-normal tracking-[-0.4px] text-[#002252] md:text-4xl lg:text-[44px]">
              Everything You need to get Your Client into Tech
            </h2>
          </div>
          <p className="max-w-[428px] text-base text-[#5B626C] md:mt-[76px] md:text-lg">
            A complete suite of assessment tools and resources to streamline your career guidance process
          </p>
        </div>
        <div className="mt-10 h-[300px] w-full bg-[#333] md:mt-10 md:h-[476px]"></div>
      </div>
    </section>
  );
};

export default Section4;