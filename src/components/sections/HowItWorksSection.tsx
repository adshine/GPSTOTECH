import { motion } from "framer-motion"

const steps = [
  {
    image: "/src/assets/imgs/HowItWorks/Step-01-Fg.png",
    title: "Create your account",
    description:
      "First, you sign up for free, and you get a 7days free trial. Then you will automatically be connected with our sales team to activate your account.",
  },
  {
    image: "/src/assets/imgs/HowItWorks/Step-02-Fg.png",
    title: "Setup your client's Profile",
    description:
      "Complete a few quick setup steps to configure your client's profile and prepare the system for comprehensive results analysis.",
  },
  {
    image: "/src/assets/imgs/HowItWorks/Step-03-Fg.png",
    title: "Get Assessment Result",
    description:
      "After completing your client's assessment, you will receive a comprehensive report along with tailored recommendations for your client.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-24 sm:py-32"
    >
      <div className="container relative">
        <div className="mx-auto max-w-4xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-[44px] font-poppins text-[#002252] mb-6 leading-tight"
          >
            We made it super easy for you to use in three simple steps
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative h-full"
              >
                <div className="group rounded-3xl border bg-card hover:shadow-[0px_4px_24px_0px_rgba(29,_78,_216,_0.08)] transition-all duration-300 h-full flex flex-col">
                  <div className="p-8 pb-0 flex-1">
                    <div className="mb-6">
                      <div className="inline-flex h-8 items-center rounded-full border border-border bg-background px-4 text-sm font-medium">
                        Step {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative h-[200px] w-full mt-auto">
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-primary/50 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  )
} 