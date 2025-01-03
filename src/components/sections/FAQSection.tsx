import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 mb-4 rounded-sm">
      <div className="p-6">
        <button
          className="w-full flex items-center justify-between text-left"
          onClick={onClick}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <Plus className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-base text-gray-600 mt-4">{answer}</p>
        </motion.div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const mailtoLink = `mailto:danieladebimpe@gmail.com?subject=${encodeURIComponent("Question about GPS to Tech")}&body=${encodeURIComponent("Hi,\n\nI have some questions about GPS to Tech that weren't covered in the FAQ section. I would appreciate if we could discuss these questions in detail.\n\nMy questions are:\n\nBest regards,")}`;

  const faqs = [
    {
      question: "Who is GPS to Tech for?",
      answer: "GPS to Tech is designed for career coaches, career services agencies, and educational institutions that are assisting individuals in pursuing a career in the tech industry."    },
    {
      question: "How many tech careers are in the database?",
      answer: "Our tech career collection keeps growing! We have 35 and more on the way. Stay tuned as we continue to expand our database with fresh opportunities for you."
    },
    {
      question: "What criteria do you use to determine the best tech career specialization?",
      answer: "Our tech career assessment takes into account your client's interests, educational background, work history, and values to figure out which specialization they're best suited for and where they"
    },
    {
      question: "How much time do advisors typically need to finish an assessment with clients?",
      answer: "There are four different assessments to complete: suitability, career, education, and barrier. Together, there are around 70 questions in total. Don't worry, it should only take between 20 to 40 minutes to finish them all."
    },
    {
      question: "Is there a special pricing available for community organizations and non-profits?",
      answer: "Absolutely! Reach out to us directly to share all the amazing ways you're making a difference in your community and to unlock exclusive rates just for you. We can't wait to hear from you!"
    }
  ];

  return (
    <section className="w-full px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="md:col-span-4">
            <div className="mb-12">
              <h2 className="text-[44px] font-poppins text-[#0A2357] mb-4 leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-gray-600">
                Get quick answers to common questions about GPS to Tech. Can't find what you're looking for? Our team is here to help.
              </p>
            </div>

            <div className="h-px w-full bg-gray-200 mb-12" />

            <div>
              <h2 className="text-[24px] font-poppins text-[#0A2357] mb-4 leading-tight">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-8">
                Support details to capture customers that might be on the fence.
              </p>
              <a 
                href={mailtoLink}
                className="inline-block px-8 py-3 bg-gradient-to-b from-white via-[#FAFBFF] to-[#F7F9FF] text-[#0A2357] border border-gray-200 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_16px_-2px_rgba(16,24,40,0.2)] shadow-[0_0_12px_-3px_rgba(16,24,40,0.15)]"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="md:col-span-8">
            <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 