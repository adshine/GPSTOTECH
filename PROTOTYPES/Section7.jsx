import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Section7 = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-[44px] font-normal leading-tight text-[#002252] tracking-[-0.4px]">
          Here is what people are saying about GPSTOTECH
        </h2>

        <div className="relative">
          <div className="flex gap-8 overflow-hidden">
            {/* Testimonial Card 1 */}
            <div className="w-full md:w-1/3 bg-white rounded-xl p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] border border-black/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-transparent bg-gradient-to-br from-[#4BACF1] to-[#1249E9]"
                  />
                ))}
              </div>
              
              <p className="my-6 text-[#5B6269] text-lg">
                "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#333]"></div>
                <span className="font-semibold">Nolan Workman</span>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="w-full md:w-1/3 bg-white rounded-xl p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] border border-black/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-transparent bg-gradient-to-br from-[#4BACF1] to-[#1249E9]"
                  />
                ))}
              </div>
              
              <p className="my-6 text-[#5B6269] text-lg">
                "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#333]"></div>
                <span className="font-semibold">Lindsey Arcand</span>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="w-full md:w-1/3 bg-white rounded-xl p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] border border-black/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-transparent bg-gradient-to-br from-[#4BACF1] to-[#1249E9]"
                  />
                ))}
              </div>
              
              <p className="my-6 text-[#5B6269] text-lg">
                "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#333]"></div>
                <span className="font-semibold">Marcus Gouse</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-9">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-[#8D8D8D]"></div>
          <div className="w-2 h-2 rounded-full bg-[#8D8D8D]"></div>
          <div className="w-2 h-2 rounded-full bg-[#8D8D8D]"></div>
          <div className="w-2 h-2 rounded-full bg-[#8D8D8D]"></div>
        </div>
      </div>
    </section>
  );
};

export default Section7;