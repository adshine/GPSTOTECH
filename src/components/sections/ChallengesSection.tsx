import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { 
  Clock04Icon, 
  MoonLandingIcon,
  CheckListIcon,
  ShareLocation01Icon,
  Mortarboard02Icon,
  AccountSetting03Icon,
  WaterfallUp01Icon,
  FolderAttachmentIcon 
} from 'hugeicons-react';

interface ChallengeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon: Icon, title, description }: ChallengeCardProps) => (
  <div className="w-[300px] md:w-[400px] flex-none bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-200">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-md font-medium text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 line-clamp-2">
      {description}
    </p>
  </div>
);

const ChallengesSection = () => {
  const challenges = [
    {
      icon: Clock04Icon,
      title: "Time-Consuming Assessments",
      description: "Manually evaluating each client's potential fit for different tech roles drains valuable consultation time."
    },
    {
      icon: MoonLandingIcon,
      title: "Rapidly Changing Skills Landscape",
      description: "Keeping track of evolving tech role requirements and new positions emerging in the market becomes overwhelming."
    },
    {
      icon: CheckListIcon,
      title: "Inconsistent Evaluation Methods",
      description: "Lacking standardized tools to objectively assess clients' aptitudes for various tech positions."
    },
    {
      icon: ShareLocation01Icon,
      title: "Complex Career Mapping",
      description: "Difficulty in creating clear pathways from clients' current skills to target the right tech"
    },
    {
      icon: Mortarboard02Icon,
      title: "Educational Route Confusion",
      description: "Challenging to recommend the most effective learning path among bootcamps, degrees, or certifications for each case."
    },
    {
      icon: AccountSetting03Icon,
      title: "Scale vs. Personalization",
      description: "Struggling to maintain detailed, personalized guidance as client numbers grow."
    },
    {
      icon: WaterfallUp01Icon,
      title: "Progress Tracking Challenges",
      description: "No systematic way to monitor and adjust clients' tech career transition journey over time."
    },
    {
      icon: FolderAttachmentIcon,
      title: "Resource Management",
      description: "Difficulty in organizing and updating relevant resources, tools, and market insights for different tech roles."
    }
  ];

  return (
    <section 
      id="challenges" 
      className="w-full bg-grey-100 py-8 md:pt-24 overflow-hidden flex flex-col items-center"
      aria-label="Common challenges in tech career guidance"
    >
      <div className="max-w-7xl mx-auto mb-0">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-[#002252] font-poppins mb-6 leading-tight">
            Tech Career Assessment Gets <br className="hidden md:block" />
            Overwhelming Without The Right Tools
          </h2>
        </div>
      </div>

      <div className="w-full relative">
        {/* First Row - Moving Right */}
        <InfiniteSlider duration={40} durationOnHover={100000} gap={16} className="py-4 mb-[-12px]">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={`right-${index}`} {...challenge} />
          ))}
        </InfiniteSlider>

        {/* Second Row - Moving Left */}
        <InfiniteSlider duration={40} durationOnHover={100000} gap={16} reverse className="py-4">
          {[...challenges].reverse().map((challenge, index) => (
            <ChallengeCard key={`left-${index}`} {...challenge} />
          ))}
        </InfiniteSlider>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none hidden md:block" />
      </div>
    </section>
  );
};

export default ChallengesSection; 