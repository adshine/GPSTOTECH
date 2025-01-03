import { motion } from 'framer-motion';
import HeroBg from '@/assets/imgs/Hero-BG.png';
import HeroDashboard from '@/assets/imgs/Hero-Dashboard.png';
import { BorderTrail } from '@/components/ui/border-trail';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col gap-4 md:gap-16"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full -z-10 opacity-30"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end md:justify-center px-4 md:px-16 pt-12 md:pt-32 pb-8 md:pb-16 mt-[120px] md:mt-[80px]">
        <motion.div 
          className="max-w-[1312px] mx-auto flex flex-col gap-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-poppins leading-[1.2] tracking-[-0.02em] max-w-[800px] mx-auto text-[#002252]">
              <div className="flex flex-col items-center">
                <span className="inline-block">Fastrack Your Client into</span>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span className="inline-block">the Right</span>{' '}
                  <span className="inline-block" style={{ background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Career</span>
                </div>
              </div>
            </h1>
          </motion.div>
          
          <motion.div 
            className="max-w-[600px] mx-auto flex flex-col items-center gap-6 md:gap-8"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-[#5B626D] text-center leading-relaxed">
              A Smart, Enterprise-Ready desktop application that helps Career Advisors, and Counsellors guide Clients ito the right tech roles
            </p>
            <motion.div>
              <motion.button
                className="px-8 py-3 rounded-full text-white font-medium text-base sm:text-lg transition-all duration-200 mb-8 md:mb-0"
                style={{ 
                  background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                  boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 8px 30px rgba(18, 73, 233, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start your free trial
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-full max-w-[1312px] mx-auto relative mt-4 md:mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div 
            className="w-full rounded-2xl overflow-hidden shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] relative border border-zinc-200/50"
            style={{ background: 'linear-gradient(white, #f0f0f0)', padding: '5px' }}
          >
            <BorderTrail
              style={{
                background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                boxShadow: '0px 0px 30px 15px rgba(75, 172, 241, 0.1), 0 0 50px 30px rgba(18, 73, 233, 0.1)',
                animationDuration: '8s'
              }}
              size={100}
            />
            <img
              src={HeroDashboard}
              alt="Career guidance dashboard interface showing assessment tools and analytics"
              className="w-full h-full object-cover rounded-[10px]"
              loading="eager"
              style={{ aspectRatio: '17/9' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 