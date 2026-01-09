import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partnerTiers = [
  {
    tier: "Presenting Partners",
    partners: [
      { name: "TechCorp", logo: "TC" },
      { name: "Global Media", logo: "GM" },
    ],
  },
  {
    tier: "Gold Partners",
    partners: [
      { name: "SportsBrand", logo: "SB" },
      { name: "Finance Pro", logo: "FP" },
      { name: "Innovation Hub", logo: "IH" },
    ],
  },
  {
    tier: "Silver Partners",
    partners: [
      { name: "Digital Agency", logo: "DA" },
      { name: "Media House", logo: "MH" },
      { name: "Brand Labs", logo: "BL" },
      { name: "Partner Co", logo: "PC" },
    ],
  },
  {
    tier: "Community Partners",
    partners: [
      { name: "StartUp TO", logo: "ST" },
      { name: "Marketing Assoc", logo: "MA" },
      { name: "Industry Group", logo: "IG" },
      { name: "Pro Network", logo: "PN" },
      { name: "Business Council", logo: "BC" },
    ],
  },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            Our Partners
          </span>
          <h2 className="section-heading mb-6">
            Powered By <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the brands and organizations making Seamless Demo Conference 
            an unforgettable experience.
          </p>
        </motion.div>

        {/* Partner Tiers */}
        <div className="space-y-16">
          {partnerTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
            >
              <h3 className="text-center font-display text-xl text-muted-foreground mb-8">
                {tier.tier}
              </h3>
              <div
                className={`flex flex-wrap justify-center gap-6 ${
                  tierIndex === 0 ? "gap-8" : ""
                }`}
              >
                {tier.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    whileHover={{ scale: 1.05 }}
                    className={`glass-card flex items-center justify-center transition-all duration-300 hover:border-primary/50 ${
                      tierIndex === 0
                        ? "w-48 h-32"
                        : tierIndex === 1
                        ? "w-40 h-28"
                        : tierIndex === 2
                        ? "w-36 h-24"
                        : "w-32 h-20"
                    }`}
                  >
                    <span
                      className={`font-display font-bold text-muted-foreground/60 ${
                        tierIndex === 0
                          ? "text-3xl"
                          : tierIndex === 1
                          ? "text-2xl"
                          : "text-xl"
                      }`}
                    >
                      {partner.logo}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card inline-block p-8 max-w-xl">
            <h3 className="font-display font-semibold text-2xl mb-4">
              Become a Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Align your brand with Canada's premier sponsorship event and connect 
              with 500+ industry leaders.
            </p>
            <a href="#" className="spx-button inline-block">
              Partnership Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
