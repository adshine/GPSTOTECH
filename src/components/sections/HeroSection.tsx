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
      className="relative w-full min-h-screen flex flex-col gap-16"
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
      <div className="flex-1 flex flex-col justify-center px-4 md:px-16 pt-32 pb-16 mt-[150px]">
        <motion.div 
          className="max-w-[1312px] mx-auto flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-[53.33px] font-poppins leading-tight tracking-[-0.4px] max-w-[800px] mx-auto text-[#002252]">
              Fastrack Your Client into<br />the Right <span style={{ background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Career</span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="max-w-[1021px] mx-auto flex flex-col items-center gap-6"
            variants={itemVariants}
          >
            <p className="text-base md:text-lg text-[#5B626D] text-center max-w-[443px]">
              A Smart, Enterprise-Ready desktop application that helps Career Advisors and Counsellors guide Clients into the right tech roles
            </p>
            <motion.div className="relative rounded-full px-1 py-1">
              <BorderTrail
                style={{
                  background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                  boxShadow: '0px 0px 30px 15px rgba(75, 172, 241, 0.1), 0 0 50px 30px rgba(18, 73, 233, 0.1)',
                  animationDuration: '4s',
                  borderRadius: '100px'
                }}
                size={100}
              />
              <motion.button
                className="relative group px-8 py-3 min-w-[200px] h-12 rounded-[100px] overflow-hidden text-white transition-all duration-200 flex items-center justify-center gap-2"
                style={{ 
                  background: 'linear-gradient(95deg, #4BACF1 4.06%, #1249E9 84.04%)',
                  boxShadow: '0px 4px 15px rgba(18, 73, 233, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(18, 73, 233, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 8px 30px rgba(18, 73, 233, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Sign Up for Free</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-full max-w-[1312px] mx-auto relative mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div 
            className="w-full rounded-2xl overflow-hidden shadow-[0_32px_64px_-32px_rgba(0,66,153,0.12)] relative border border-zinc-200/50"
            style={{ background: 'linear-gradient(white, #f0f0f0)', paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px', paddingBottom: '-2px' }}
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
              className="w-full h-[200px !important]"
              style={{ objectFit: 'contain', borderRadius: '10px' }}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 