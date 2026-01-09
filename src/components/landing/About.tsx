import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Network, TrendingUp } from "lucide-react";

const stats = [
  { value: "500+", label: "Delegates" },
  { value: "50+", label: "Speakers" },
  { value: "30+", label: "Sessions" },
  { value: "3", label: "Days" },
];

const features = [
  {
    icon: Target,
    title: "Strategic Insights",
    description: "Gain actionable strategies from industry leaders to drive measurable ROI.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description: "Discover cutting-edge sponsorship trends and emerging technologies.",
  },
  {
    icon: Network,
    title: "Power Networking",
    description: "Connect with Canada's top brands, agencies, and properties.",
  },
  {
    icon: TrendingUp,
    title: "Growth Catalyst",
    description: "Transform your partnerships into powerful growth engines.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            About The Event
          </span>
          <h2 className="section-heading mb-6">
            Elevate Your <span className="gradient-text">Seamless Game</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Seamless Demo Conference brings together the brightest minds in marketing,
            sponsorship, and brand partnerships for three transformative days of learning,
            networking, and growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
