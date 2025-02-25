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
    <div className="relative px-2 sm:px-0">
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
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center py-8 sm:py-12 md:py-20">
      {imagePosition === 'left' && (
        <div className="order-2 md:order-1">
          {imageContent}
        </div>
      )}
      <div className={`order-1 md:order-2 px-2 sm:px-0 ${imagePosition === 'right' ? 'md:pr-6 lg:pr-12' : 'md:pl-6 lg:pl-12'}`}>
        <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins text-[#002252] break-words">{title}</h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8">{description}</p>
        <ul className="space-y-3 sm:space-y-4 md:space-y-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1 md:mt-0" />
              <span className="text-sm sm:text-base text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {imagePosition === 'right' && (
        <div className="order-2">
          {imageContent}
        </div>
      )}
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Hero Section */}
        <div className="py-8 sm:py-12 md:py-20 relative">
          <div className="max-w-3xl">
            <span className="text-primary font-medium mb-3 sm:mb-4 block">Features Like No Other</span>
            <h2 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2.75rem] font-poppins text-[#002252] mb-3 sm:mb-4 md:mb-6 leading-[1.2]">
              <div className="flex flex-col gap-1">
                <span className="inline-block break-words">Everything You need to get Your Client into Tech</span>
              </div>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[600px]">
              A complete suite of assessment tools and resources to streamline your career guidance process
            </p>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12">
            <img 
              src={FeaturesBg}
              alt="GPSTOTECH Platform Interface" 
              className="w-full max-h-[300px] sm:max-h-[450px] md:h-[600px] rounded-[10px] object-contain"
              loading="lazy"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
              draggable="false"
            />
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-12 md:space-y-0">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 