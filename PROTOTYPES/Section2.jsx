import React from 'react';
import { Clock, Rocket, CheckCircle, Map, Settings, Folder } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CarouselItem = ({ icon: Icon, title, description }) => (
  <Card className="w-96 h-32 flex-none mx-4 border-0 shadow-lg relative z-10 bg-blue-600 hover:bg-blue-600">
    <CardContent className="p-6 bg-blue-600">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-white text-xl font-medium leading-tight">{title}</h3>
      </div>
      <p className="text-white text-lg mt-4 leading-relaxed line-clamp-2">
        {description}
      </p>
    </CardContent>
  </Card>
);

const InfiniteCarousel = () => {
  const itemsRow1 = [
    {
      icon: Clock,
      title: "Time-Consuming Assessments",
      description: "Manually evaluating each client's potential fit for different tech roles drains valuable consultation time."
    },
    {
      icon: Rocket,
      title: "Rapidly Changing Skills Landscape",
      description: "Keeping track of evolving tech role requirements and new positions emerging in the market becomes overwhelming."
    },
    {
      icon: CheckCircle,
      title: "Inconsistent Evaluation Methods",
      description: "Lacking standardized tools to objectively assess clients' aptitudes for various tech positions."
    },
    {
      icon: Map,
      title: "Complex Career Mapping",
      description: "Difficulty in creating clear pathways from clients' current skills to target the right tech"
    }
  ];

  const itemsRow2 = [
    {
      icon: Settings,
      title: "Educational Route Confusion",
      description: "Challenging to recommend the most effective learning path among bootcamps, degrees, or certifications for each case."
    },
    {
      icon: Settings,
      title: "Scale vs. Personalization",
      description: "Struggling to maintain detailed, personalized guidance as client numbers grow."
    },
    {
      icon: Map,
      title: "Progress Tracking Challenges",
      description: "No systematic way to monitor and adjust clients' tech career transition journey over time."
    },
    {
      icon: Folder,
      title: "Resource Management",
      description: "Difficulty in organizing and updating relevant resources, tools, and market insights for different tech roles."
    }
  ];

  // Create duplicated arrays for smooth infinite scroll
  const duplicatedRow1 = [...itemsRow1, ...itemsRow1, ...itemsRow1, ...itemsRow1];
  const duplicatedRow2 = [...itemsRow2, ...itemsRow2, ...itemsRow2, ...itemsRow2];

  return (
    <div className="w-full bg-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-40">
        <h2 className="text-5xl text-center text-gray-900 font-medium mb-24 max-w-4xl mx-auto leading-tight">
          Tech Career Assessment Gets Overwhelming Without The Right Tools
        </h2>

        {/* First Row */}
        <div className="mb-16 overflow-hidden relative z-10">
          <div className="flex animate-scroll-right">
            {duplicatedRow1.map((item, index) => (
              <CarouselItem key={`row1-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden relative z-10">
          <div className="flex animate-scroll-left">
            {duplicatedRow2.map((item, index) => (
              <CarouselItem key={`row2-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;