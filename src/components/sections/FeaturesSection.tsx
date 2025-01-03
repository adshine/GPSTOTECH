import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import CompCardBg from '@/assets/imgs/Features/Comp-card-Bg.png';
import CompCardFg from '@/assets/imgs/Features/Comp-card-Fg.png';
import AnalyticsCardBg from '@/assets/imgs/Features/Analytics-Card-Bg.png';
import AnalyticsCardFg from '@/assets/imgs/Features/Analytics-Card-Fg.png';
import SeamlessCardBg from '@/assets/imgs/Features/Seemless-Card-Bg.png';
import SeamlessCardFg from '@/assets/imgs/Features/Seemless-Card-Fg.png';
import FeaturesBg from '@/assets/imgs/Features/Features-Bg.png';

type FeatureBlockProps = {
  title: string;
  description: string;
  items: string[];
  bgImage: string;
  fgImage: string;
  imagePosition?: 'left' | 'right';
};

const FeatureBlock = ({ 
  title, 
  description, 
  items,
  bgImage,
  fgImage,
  imagePosition = 'right'
}: FeatureBlockProps) => {
  const imageContent = (
    <div className="relative">
      <img src={bgImage} alt="" className="w-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src={fgImage} alt={title} className="w-full" />
      </motion.div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center py-20">
      {imagePosition === 'left' && imageContent}
      <div className={`${imagePosition === 'right' ? 'md:pr-12' : 'md:pl-12'}`}>
        <h3 className="text-2xl md:text-3xl font-poppins text-[#002252] mb-4">{title}</h3>
        <p className="text-gray-600 mb-8">{description}</p>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {imagePosition === 'right' && imageContent}
    </div>
  );
};

const FeaturesSection = () => {
  const features: FeatureBlockProps[] = [
    {
      title: "Comprehensive Assessment Suite",
      description: "Four powerful assessments that evaluate suitability, career matching, training paths, and potential barriers",
      items: [
        "Suitability Assessment - Evaluate tech readiness and preparation needs",
        "Career Assessment - Match to tech specializations with required technologies",
        "Training Route Assessment - Determine optimal education pathway",
        "Barriers Assessment - Identify and plan around obstacles"
      ],
      bgImage: CompCardBg,
      fgImage: CompCardFg
    },
    {
      title: "Insightful Analytics Dashboard",
      description: "Track and analyze client demographics, assessment metrics, and success patterns",
      items: [
        "Demographic insights including age and ethnicity",
        "Assessment completion tracking",
        "Agency-wide performance views",
        "Trend analysis and reporting"
      ],
      bgImage: AnalyticsCardBg,
      fgImage: AnalyticsCardFg,
      imagePosition: 'left' as const
    },
    {
      title: "Seamless Integration",
      description: "Connect and integrate with platforms you already use, automate repetitive tasks, and keep everything organized in one place",
      items: [
        "Google Calendar integration",
        "Automated report generation",
        "Email analytics tracking",
        "Resource management system"
      ],
      bgImage: SeamlessCardBg,
      fgImage: SeamlessCardFg,
      imagePosition: 'right' as const
    }
  ];

  return (
    <section 
      id="features" 
      className="w-full bg-white"
      aria-label="Key features of GPSTOTECH"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="py-20 relative">
          <div className="max-w-3xl">
            <span className="text-primary font-medium mb-4 block">Features Like No Other</span>
            <h2 className="text-3xl md:text-[44px] font-poppins text-[#002252] mb-6 leading-tight">
              Everything You need to get Your Client into Tech
            </h2>
            <p className="text-gray-600 text-lg">
              A complete suite of assessment tools and resources to streamline your career guidance process
            </p>
          </div>
          <div className="mt-12">
            <motion.img 
              src={FeaturesBg}
              alt="GPSTOTECH Platform Interface" 
              className="w-full rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Feature Blocks */}
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection; 