import { 
  StarIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon
} from 'hugeicons-react';
import { useState } from 'react';

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    text: "GPSTOTECH has revolutionized how we guide our clients into tech careers. The assessment tools are incredibly accurate and save us hours of manual evaluation time.",
    name: "Sarah Johnson",
    role: "Career Advisor",
    company: "Tech Futures Institute"
  },
  {
    text: "The comprehensive assessment suite helps us make data-driven decisions for our clients. It's like having an AI-powered career guidance assistant.",
    name: "Michael Chen",
    role: "Career Counselor",
    company: "Digital Skills Academy"
  },
  {
    text: "What impressed me most is how the platform creates personalized learning paths. It's made our job of guiding career transitions much more efficient.",
    name: "Emily Rodriguez",
    role: "Career Coach",
    company: "Future Skills Center"
  },
  {
    text: "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    name: "Nolan Workman",
    role: "Career Advisor",
    company: "Tech Academy"
  },
  {
    text: "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    name: "Lindsey Arcand",
    role: "Career Coach",
    company: "Future Tech Institute"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <div className="bg-white rounded-lg p-8 shadow-sm border border-zinc-100 h-full flex flex-col">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className="w-5 h-5 text-blue-500"
        />
      ))}
    </div>
    
    <p className="text-[#5B6269] text-lg flex-grow">
      {testimonial.text}
    </p>

    <div className="flex items-center gap-4 mt-6">
      <div 
        className="min-w-[48px] w-[48px] h-[48px] rounded-full flex items-center justify-center relative overflow-hidden"
        style={{ 
          backgroundImage: 'url("/src/assets/imgs/Features/Comp-card-Bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <span className="text-white font-semibold text-[20px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          {testimonial.name.charAt(0)}
        </span>
      </div>
      <div>
        <span className="font-medium text-gray-900 block">{testimonial.name}</span>
        <span className="text-sm text-[#5B6269]">{testimonial.role}, {testimonial.company}</span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const canGoNext = currentIndex < testimonials.length - 3;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section 
      id="testimonials" 
      className="w-full bg-white py-20"
      aria-label="Client testimonials"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[44px] text-center font-poppins text-[#002252] mb-16 leading-tight max-w-3xl mx-auto">
          Here is what people are saying about GPSTOTECH
        </h2>

        <div className="max-w-[1140px] mx-auto relative px-12">
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-none md:w-[calc(33.333%-11px)]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-15 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-15 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Navigation Row with Arrows and Dots */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                canGoPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Previous testimonials"
            >
              <ArrowLeft01Icon className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: testimonials.length - 2 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    i === currentIndex 
                      ? 'w-4 bg-gradient-to-r from-[#0B63E5] to-[#0B63E5]/70'
                      : 'bg-zinc-200'
                  }`}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                canGoNext ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Next testimonials"
            >
              <ArrowRight01Icon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 