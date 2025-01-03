import { motion } from 'framer-motion';
import BenefitBG from '@/assets/imgs/Benefit-BG.png';
import { 

  Target01Icon, 
  PieChartSquareIcon, 

  BulbIcon,
  WaterfallUp01Icon,

} from 'hugeicons-react';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon: Icon, title, description, index }: BenefitCardProps) => (
  <motion.div
    className="relative border border-slate-200 p-6 rounded-xl bg-white overflow-hidden hover:border hover:border-[rgba(0,0,0,0.10)] hover:bg-white hover:shadow-[0px_32px_64px_-32px_rgba(0,66,153,0.40)] transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    }}
    viewport={{ once: true }}
  >
    <div className="mb-6">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
    <h3 className="text-xl font-medium text-[#002252] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
    
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-" />
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target01Icon,
      title: "Pinpoint Skill Sets",
      description: "Our assessment engine matches your client's current skills, interests, and aptitudes, then aligns them with specific tech roles."
    },
    {
      icon: PieChartSquareIcon,
      title: "Understand the Tech Landscape",
      description: "Break down tech jobs—from UX design to data analysis—showing you and your clients the bigger picture."
    },
    {
      icon: WaterfallUp01Icon,
      title: "Streamline Ongoing Learning",
      description: "Suggest tailored learning pathways—featuring courses, certifications, and hands-on tasks—so your clients never fall behind."
    },
    {
      icon: BulbIcon,
      title: "Remove Barriers & Build Confidence",
      description: "Help job seekers overcome their fears and misconceptions, with activities and resources that prove they can fit into tech."
    },
  ];

  return (
    <section 
      id="benefits" 
      className="w-full bg-white px-4 py-20 md:py-32 relative"
      aria-label="Benefits of using GPSTOTECH"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${BenefitBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium mb-4 block">Benefits</span>
          <h2 className="text-3xl md:text-[44px] font-poppins text-[#002252] mb-6 tracking-[-1.76px] leading-[120%]">
            GPS to Tech - Your Career<br />
            Guidance Solution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            All-in-one Counselling Assessment Application designed to demystify tech careers
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 