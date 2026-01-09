import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-toronto.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Toronto Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              Coming Summer 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="section-heading mb-4">
            <span className="gradient-text">SEAMLESS</span>
            <span className="block text-foreground">2026</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-light">
            Where Canada's top marketing leaders, brands, and innovators
            converge to shape the future of seamless partnerships.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="text-primary" size={20} />
              <span>June 18-20, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="text-primary" size={20} />
              <span>500+ Delegates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#register" className="spx-button">
              Register Now
            </a>
            <a href="#about" className="spx-button-outline">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
