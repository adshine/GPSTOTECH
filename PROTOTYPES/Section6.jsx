import { ArrowRight } from 'lucide-react';

const Section6 = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-lg text-gray-500">How it works</p>
          <h2 className="text-4xl font-normal tracking-tight text-[#002252] md:text-5xl">
            We made it super easy for you to use in three simple steps
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative rounded-xl border border-black/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)]">
            <div className="mb-6 inline-flex rounded-full border border-black/10 px-3 py-2">
              <span className="text-sm font-bold">Step 01</span>
            </div>
            
            <h3 className="mb-4 text-2xl text-[#002252]">Create your account</h3>
            <p className="text-lg text-gray-500">
              First, you sign up for free, and you get a 7days free trial. Then you will automatically be connected with our sales team to activate your account.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-xl border border-black/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.24)]">
            <div className="mb-6 inline-flex rounded-full border border-black/10 px-3 py-2">
              <span className="text-sm font-bold">Step 02</span>
            </div>
            
            <h3 className="mb-4 text-2xl text-[#002252]">Setup your client's Profile</h3>
            <p className="text-lg text-gray-500">
              Complete a few quick setup steps to configure your client's profile and prepare the system for comprehensive results analysis.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-xl border border-black/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)]">
            <div className="mb-6 inline-flex rounded-full border border-black/10 px-3 py-2">
              <span className="text-sm font-bold">Step 03</span>
            </div>
            
            <h3 className="mb-4 text-2xl text-[#002252]">Get Assessment Result</h3>
            <p className="text-lg text-gray-500">
              After completing your client's assessment, you will receive a comprehensive report along with tailored recommendations for your client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;