import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const mailtoLink = `mailto:danieladebimpe@gmail.com?subject=${encodeURIComponent("Interested in GPS to Tech Solutions")}&body=${encodeURIComponent("Hi,\n\nI'm interested in learning more about GPS to Tech solutions for my organization. I would like to schedule a call to discuss how it can help our career guidance process.\n\nBest regards,")}`;

  return (
    <section className="relative w-full min-h-[490px] px-4 py-20 flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 ">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[url('/src/assets/imgs/CTA-Bg.png')] bg-cover bg-center bg-no-repeat" />
          
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-[44px] font-poppins text-white text-center leading-tight tracking-[-0.4px]">
              Ready to Transform Your Career<br className="hidden md:block" /> Guidance Process?
            </h2>
            <p className="text-lg text-white/90 text-center max-w-[565px] mx-auto font-poppins">
              Start delivering data-driven tech career guidance today. Join career advisors who are scaling their impact with confidence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <motion.button
              className="relative group px-8 py-3 min-w-[200px] h-12 rounded-full overflow-hidden bg-gradient-to-r from-white/95 to-white shadow-[0_2px_8px_rgba(255,255,255,0.3)] text-primary/90 hover:text-primary hover:shadow-[0_4px_12px_rgba(255,255,255,0.4)] transition-all duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Try GPS to Tech Free</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.a
              href={mailtoLink}
              className="relative group px-8 py-3 min-w-[200px] h-12 rounded-full overflow-hidden border-2 border-white text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Talk to Sales</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 