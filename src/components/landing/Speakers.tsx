import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
  <section id="speakers" className="py-24 bg-secondary/30 overflow-x-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            Expert Speakers
          </span>
          <h2 className="section-heading mb-6">
            Learn From The <span className="gradient-text">Best</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our lineup features industry pioneers, visionary leaders, and practitioners 
            who are reshaping the sponsorship landscape.
          </p>
        </motion.div>

        {/* More Speakers CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            More speakers to be announced soon!
          </p>
          <a href="https://app.seamlessevents.io/speaker-intake/20d484d1-b730-40ab-afbe-2f2423a37d51" className="spx-button-outline inline-block">
            Apply to Speak
          </a>
        </motion.div>
      </div>

      <br/>
      <br/>

      {/* Embedded speakers widget - full-bleed (spans viewport width) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative w-[100vw]"
      >
        <div className="aspect-video w-full rounded-none overflow-hidden shadow-lg">
          <iframe
            src="https://app.seamlessevents.io/event/20d484d1-b730-40ab-afbe-2f2423a37d51/speakers/embed/promo"
            title="Event speakers"
            className="w-full h-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Speakers;
