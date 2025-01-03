import { Pin } from 'lucide-react';

const Section03 = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-base font-semibold text-black">Benefits</p>
          <h2 className="mb-6 text-[44px] font-normal leading-tight tracking-[-0.4px] text-[#002252]">
            GPS to Tech - Your Career Guidance Solution
          </h2>
          <p className="text-lg text-[#5B626D]">
            All-in-one Counselling Assessment Application designed to demystify tech careers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative border border-black/10 p-6">
            <div className="mb-6">
              <Pin className="h-6 w-6 text-[#1676FF]" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-normal text-[#002252]">
                Pinpoint Skill Sets
              </h3>
              <p className="text-base font-medium text-[#5B626D]">
                Our assessment engine matches your client's current skills, interests, and aptitudes, then aligns them with specific tech roles.
              </p>
            </div>
            <div className="absolute top-0 left-0 h-[5px] w-full bg-[#CCd9EB]" />
          </div>

          <div className="relative border border-black/10 p-6">
            <div className="mb-6">
              <Pin className="h-6 w-6 text-[#1676FF]" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-normal text-[#002252]">
                Understand the Tech Landscape
              </h3>
              <p className="text-base font-medium text-[#5B626D]">
                Break down tech jobs—from UX design to data analysis—showing you and your clients the bigger picture.
              </p>
            </div>
            <div className="absolute top-0 left-0 h-[5px] w-full bg-[#CCd9EB]" />
          </div>

          <div className="relative border border-black/10 p-6">
            <div className="mb-6">
              <Pin className="h-6 w-6 text-[#1676FF]" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-normal text-[#002252]">
                Streamline Ongoing Learning
              </h3>
              <p className="text-base font-medium text-[#5B626D]">
                Suggest tailored learning pathways—featuring courses, certifications, and hands-on tasks—so your clients never fall behind.
              </p>
            </div>
            <div className="absolute top-0 left-0 h-[5px] w-full bg-[#CCd9EB]" />
          </div>

          <div className="relative border border-black/10 p-6">
            <div className="mb-6">
              <Pin className="h-6 w-6 text-[#1676FF]" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-normal text-[#002252]">
                Remove Barriers & Build Confidence
              </h3>
              <p className="text-base font-medium text-[#5B626D]">
                Help job seekers overcome their fears and misconceptions, with activities and resources that prove they can fit into tech.
              </p>
            </div>
            <div className="absolute top-0 left-0 h-[5px] w-full bg-[#CCd9EB]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;