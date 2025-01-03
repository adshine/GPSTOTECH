import { Plus } from 'lucide-react';
import { useState } from 'react';

const Section9 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Who is GPS to Tech for?",
      answer: "Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?Who is GPS to Tech for?"
    },
    {
      question: "How many tech careers are in the database?",
      answer: ""
    },
    {
      question: "What criteria do you use to determine the best tech career specialization?",
      answer: ""
    },
    {
      question: "How much time do advisors typically need to finish an assessment with clients?",
      answer: ""
    },
    {
      question: "Is there a special pricing available for community organizations and non-profits?",
      answer: ""
    }
  ];

  return (
    <section className="w-full bg-white px-16 py-28">
      <div className="max-w-[1312px] mx-auto space-y-20">
        <div className="flex gap-20">
          <div className="max-w-[487px] space-y-6">
            <h2 className="text-[44px] text-[#002252] leading-tight tracking-[-0.4px]">
              Frequently asked questions
            </h2>
            <p className="text-lg text-[#5B6269]">
              Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
            </p>
          </div>

          <div className="flex-1 space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-black/10 rounded-xl shadow-[0_32px_64px_-32px_rgba(0,66,153,0.04)]"
              >
                <div 
                  className="p-8 flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <h3 className="font-bold text-lg pr-6">{faq.question}</h3>
                  <Plus 
                    className={`w-8 h-8 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                  />
                </div>
                {openIndex === index && faq.answer && (
                  <div className="px-8 pb-8">
                    <p className="text-[#5B6269]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[560px] mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-[44px] text-[#002252] leading-tight tracking-[-0.4px]">
              Still have questions?
            </h2>
            <p className="text-lg">
              Support details to capture customers that might be on the fence.
            </p>
          </div>
          <button className="px-5 py-2 border border-black/10 rounded-full text-[#002252]">
            Talks to Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section9;