# GPSTOTECH Website Implementation Guide

This document provides step-by-step instructions for building the GPSTOTECH website using React, Vite, and Tailwind CSS.

## 1. Project Setup

```bash
# Create new Vite project
npm create vite@latest gpstotech --template react-ts

# Install dependencies
cd gpstotech
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Add Tailwind to CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2. Section Implementation

### 2.1 Hero Section (HERO_SECTION.jsx)

```tsx
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-16 pt-40 flex flex-col gap-16">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-6">
        <h1 className="text-3xl md:text-[53.33px] text-center font-poppins leading-tight tracking-[-0.4px] max-w-[581px] mx-auto">
          Fastrack Your Client into the Right Tech Career
        </h1>
        
        <div className="max-w-[1021px] mx-auto flex flex-col items-center gap-6">
          <p className="text-[13.33px] text-[#5B626D] text-center max-w-[443px]">
            A Smart, Enterprise-Ready desktop application that helps Career Advisors, and Counsellors guide Clients ito the right tech roles
          </p>
          
          <button className="relative group px-5 py-2.5 min-w-[188px] h-11 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4670EC] to-[#1248E9] transform transition-transform group-hover:scale-105" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#4670EC] to-[#1248E9] rounded-full" 
                 style={{
                   WebkitMaskComposite: 'xor',
                   maskComposite: 'exclude'
                 }} />
            <span className="relative text-white font-poppins text-base flex items-center justify-center gap-2">
              Start your free trial
            </span>
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-[1312px] mx-auto h-[720px] bg-black rounded-none" />
    </div>
  );
};

export default HeroSection;
```

- Full-width section with gradient background
- Centered heading and subheading
- CTA button with hover effects
- Placeholder for hero image/video

### 2.2 Challenges Section (Section2.jsx)

```tsx
import React from 'react';
import { Clock, Rocket, CheckCircle, Map, Settings, Folder } from 'lucide-react';

const CarouselItem = ({ icon: Icon, title, description }) => (
  <div className="w-96 h-32 flex-none mx-4 bg-blue-600 p-6 rounded-lg shadow-lg">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-white text-xl font-medium">{title}</h3>
    </div>
    <p className="text-white text-lg mt-4 line-clamp-2">
      {description}
    </p>
  </div>
);

const ChallengesSection = () => {
  const items = [
    // Array of challenge items
  ];

  return (
    <div className="w-full bg-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-40">
        <h2 className="text-5xl text-center text-gray-900 font-medium mb-24 max-w-4xl mx-auto leading-tight">
          Tech Career Assessment Gets Overwhelming Without The Right Tools
        </h2>

        <div className="mb-16 overflow-hidden relative">
          <div className="flex animate-scroll-right">
            {items.map((item, index) => (
              <CarouselItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
```

- Infinite scrolling carousel of challenge cards
- Two rows scrolling in opposite directions
- Each card has icon, title and description
- Smooth animation using CSS keyframes

### 2.3 Benefits Section (Section03.jsx)

```tsx
import { Pin } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-base font-semibold text-black">Benefits</p>
          <h2 className="mb-6 text-[44px] font-normal leading-tight tracking-[-0.4px] text-[#002252]">
            GPS to Tech - Your Career Guidance Solution
          </h2>
          <p className="text-lg text-[#5B626D]">
            All-in-one Counselling Assessment Application designed to demystify tech careers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative border border-black/10 p-6">
              <div className="mb-6">
                <Pin className="h-6 w-6 text-[#1676FF]" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-normal text-[#002252]">
                  {benefit.title}
                </h3>
                <p className="text-base font-medium text-[#5B626D]">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute top-0 left-0 h-[5px] w-full bg-[#CCd9EB]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
```

- Grid layout of benefit cards
- Each card has icon, title and description
- Top border accent
- Responsive column layout

### 2.4 Features Section (Section4.jsx)

```tsx
const FeaturesSection = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-24">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-[#5B626C]">
              Features Like No Other
            </span>
            <h2 className="mt-0 text-3xl font-normal tracking-[-0.4px] text-[#002252] md:text-4xl lg:text-[44px]">
              Everything You need to get Your Client into Tech
            </h2>
          </div>
          <p className="max-w-[428px] text-base text-[#5B626C] md:mt-[76px] md:text-lg">
            A complete suite of assessment tools and resources to streamline your career guidance process
          </p>
        </div>
        <div className="mt-10 h-[300px] w-full bg-[#333] md:mt-10 md:h-[476px]"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

- Two-column layout with text and visual
- Heading and description
- Placeholder for feature visualization

### 2.5 Assessment Suite Section (Section5A.jsx)

```tsx
import { CheckSquare } from 'lucide-react';

const AssessmentSuiteSection = () => {
  return (
    <div className="flex px-16 py-28 bg-white gap-20">
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[44px] text-[#002252] font-poppins tracking-[-0.4px] leading-[53px]">
              Comprehensive Assessment Suite
            </h2>
            <p className="text-lg text-[#5B626D]">
              Four powerful assessments that evaluate suitability, career matching, training paths, and potential barriers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-lg text-[#5B626D]">
                Suitability Assessment - Evaluate tech readiness and preparation needs
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-lg text-[#5B626D]">
                Career Assessment - Match to tech specializations with required technologies
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-lg text-[#5B626D]">
                Training Route Assessment - Determine optimal education pathway
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-lg text-[#5B626D]">
                Barriers Assessment - Identify and plan around obstacles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[616px] h-[640px] bg-[#004299]">
        <div className="absolute top-14 left-9 w-[544px] h-[338px] rounded-[21px] border border-white shadow-lg bg-[#333]" />
        <div className="absolute top-[405px] left-9 w-[544px] h-[338px] rounded-[21px] border border-white shadow-lg bg-[#333]" />
      </div>
    </div>
  );
};

export default AssessmentSuiteSection;
```

- Two-column layout
- List of assessment features with checkmarks
- Right side has overlapping visual elements

### 2.6 Career Planning Section (Section5b.jsx)

```tsx
import { CheckSquare } from 'lucide-react';

const CareerPlanningSection = () => {
  return (
    <div className="flex px-16 py-28 bg-white gap-20">
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[44px] text-[#002252] font-poppins leading-tight tracking-[-0.4px]">
              Career Planning & Resources
            </h2>
            <p className="text-[#5B626D] text-lg">
              Access detailed information for over 35 tech careers with comprehensive transition planning.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[440px]">
            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Detailed tech career descriptions and requirements
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Comprehensive assessment reports
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Actionable transition plans
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-1.5 text-[#466EEC]" />
              <p className="text-[#5B626D] text-lg">
                Resource libraries for each career path
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[616px] h-[640px] bg-[#002252] overflow-hidden">
        <div className="absolute w-[502px] h-[501px] left-[57px] top-[69px] rounded-[400px] bg-white/10 border border-black/10 backdrop-blur-lg shadow-lg" />
        
        <div className="absolute left-[68px] top-[84px] flex flex-col gap-[17px]">
          <div className="w-[473px] h-[473px] rounded-full bg-[#87A9FF] shadow-lg backdrop-blur-lg" />
          <div className="w-[473px] h-[473px] rounded-full bg-[#C1F1F1] shadow-lg backdrop-blur-[50px] rotate-[-114deg] translate-x-[549px] translate-y-[118px]" />
          <div className="w-[473px] h-[473px] rounded-full bg-gradient-to-br from-[#4BACF1] to-[#1249E9] shadow-lg backdrop-blur-lg rotate-[127deg] translate-x-[191px] translate-y-[568px]" />
          
          <div className="absolute w-[190px] h-[190px] left-[145px] top-[141px] rounded-[104px] bg-[#333] shadow-lg" />
          
          <div className="absolute left-[156px] top-[296px] bg-white rounded-[32px] py-2 px-4">
            <p className="text-base">Sam's Assessment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlanningSection;
```

- Two-column layout
- List of career planning features
- Complex circular visual design

### 2.7 How It Works Section (Section6.jsx)

```tsx
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
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
            
            <h3 className="mb-4 text-2xl text-[#002252]">Create Client Profile</h3>
            <p className="text-lg text-gray-500">
              Create a profile for your client by entering their basic information and career goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-xl border border-black/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)]">
            <div className="mb-6 inline-flex rounded-full border border-black/10 px-3 py-2">
              <span className="text-sm font-bold">Step 02</span>
            </div>
            
            <h3 className="mb-4 text-2xl text-[#002252]">Run Assessment</h3>
            <p className="text-lg text-gray-500">
              Guide your client through our comprehensive assessment process.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-xl border border-black/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)]">
            <div className="mb-6 inline-flex rounded-full border border-black/10 px-3 py-2">
              <span className="text-sm font-bold">Step 03</span>
            </div>
            
            <h3 className="mb-4 text-2xl text-[#002252]">Get Assessment Result</h3>
            <p className="text-lg text-gray-500">
              Receive a comprehensive report with tailored recommendations for your client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
```

- Three-step process cards
- Each card has step number, title and description
- Consistent shadow and border styling

### 2.8 Testimonials Section (Section7.jsx)

```tsx
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-[44px] font-normal leading-tight text-[#002252] tracking-[-0.4px]">
          Here is what people are saying about GPSTOTECH
        </h2>

        <div className="relative">
          <div className="flex gap-8 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 bg-white rounded-xl p-8 shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] border border-black/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-transparent bg-gradient-to-br from-[#4BACF1] to-[#1249E9]"
                    />
                  ))}
                </div>
                
                <p className="my-6 text-[#5B6269] text-lg">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#333]"></div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
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
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-black' : 'bg-[#8D8D8D]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
```

- Carousel of testimonial cards
- Star rating system
- Navigation buttons and indicators
- Placeholder for user avatars

### 2.9 CTA Section (Section8.jsx)

```tsx
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative w-full min-h-[490px] px-4 md:px-16 py-20 flex items-center justify-center bg-[#333]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/path-to-your-image.jpg")',
          filter: 'contrast(0.7) brightness(0.86) saturate(1.27)',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-[44px] font-normal text-white text-center leading-tight tracking-[-0.4px] font-poppins">
              Ready to Transform Your Career Guidance Process?
            </h2>
            <p className="text-base md:text-lg text-white text-center max-w-[565px] mx-auto font-roboto">
              Start delivering data-driven tech career guidance today. Join career advisors who are scaling their impact with confidence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <button className="relative group px-5 py-2.5 min-h-[44px] rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4670EC] to-[#1248E9]" />
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-[#4670EC] to-[#1248E9]" 
                   style={{
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }} />
              <span className="relative text-white font-poppins text-base">
                Try GPS to Tech Free for 7 Days
              </span>
            </button>
            
            <button className="relative group px-5 py-2 min-h-[40px] rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white" />
              <span className="relative text-white font-poppins text-base">
                Talks to Sales
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

- Full-width section with background image
- Centered heading and subheading
- Two CTA buttons with different styles

### 2.10 Footer (Footer.jsx)

```tsx
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#333] px-16 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex flex-col gap-8">
            <div className="w-[187px] h-[34px]">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="flex gap-8 flex-wrap">
              <a href="#" className="text-white hover:opacity-80">Benefits</a>
              <a href="#" className="text-white hover:opacity-80">Features</a>
              <a href="#" className="text-white hover:opacity-80">How it works</a>
              <a href="#" className="text-white hover:opacity-80">Testimonials</a>
            </div>
          </div>

          <div className="w-full lg:w-[400px] flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-[-0.4px]">
              Subscribe to our news letter today
            </h4>

            <div className="w-full border border-white rounded-full p-1 flex">
              <div className="flex-1 px-4 py-2">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                />
              </div>

              <button className="px-5 py-2.5 rounded-full bg-gradient-to-br from-[#4670EC] to-[#1247E8] text-white border border-white">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-white opacity-80">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex gap-6 flex-wrap">
              <a href="#" className="text-sm text-white hover:opacity-80">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white hover:opacity-80">
                Terms of Service  
              </a>
              <a href="#" className="text-sm text-white hover:opacity-80">
                Cookies Settings
              </a>
            </div>

            <p className="text-sm text-white">
              © 2025 GPSTOTECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- Three-column layout
- Logo and navigation links
- Email subscription form
- Legal links and copyright notice

## 3. Component Organization

```src/
  components/
    sections/
      HeroSection.tsx
      ChallengesSection.tsx
      BenefitsSection.tsx
      FeaturesSection.tsx
      AssessmentSuiteSection.tsx
      CareerPlanningSection.tsx
      HowItWorksSection.tsx
      TestimonialsSection.tsx
      CTASection.tsx
      Footer.tsx
    ui/
      Card.tsx
      Button.tsx
```

## 4. Styling Approach

- Use Tailwind's utility-first CSS
- Custom colors defined in tailwind.config.js
- Consistent spacing using Tailwind's spacing scale
- Responsive design using Tailwind's breakpoints
- Complex gradients and shadows using Tailwind classes

## 5. Deployment

```bash
# Build for production
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod
