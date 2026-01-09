import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const tickets = [
  {
    name: "Early Bird",
    price: "$1,299",
    originalPrice: "$1,799",
    description: "Limited availability - book now and save",
    features: [
      "Full 3-day conference access",
      "All keynotes and panels",
      "Networking events",
      "Welcome reception",
      "Gala dinner",
      "Conference materials",
    ],
    popular: false,
  },
  {
    name: "Executive",
    price: "$2,499",
    originalPrice: null,
    description: "Premium experience for senior leaders",
    features: [
      "Everything in Early Bird",
      "VIP seating at keynotes",
      "Executive breakfast sessions",
      "Private networking lounge",
      "1-on-1 meeting facilitation",
      "Exclusive after-party access",
    ],
    popular: true,
  },
  {
    name: "Team Pass",
    price: "$4,999",
    originalPrice: "$5,397",
    description: "Best value for groups (3 tickets)",
    features: [
      "3x Early Bird passes",
      "Team coordination support",
      "Dedicated account manager",
      "Group photo opportunity",
      "Post-event insights report",
      "Early access to 2027 tickets",
    ],
    popular: false,
  },
];

const Register = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            Register Now
          </span>
          <h2 className="section-heading mb-6">
            Secure Your <span className="gradient-text">Spot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Early bird pricing ends May 1, 2026. 
            Don't miss your chance to be part of something extraordinary.
          </p>
        </motion.div>

        {/* Ticket Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 relative ${
                ticket.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="font-display font-semibold text-2xl mb-2">
                {ticket.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-display font-bold gradient-text">
                  {ticket.price}
                </span>
                {ticket.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    {ticket.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                {ticket.description}
              </p>

              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group ${
                  ticket.popular
                    ? "spx-button"
                    : "spx-button-outline"
                }`}
              >
                <span>Register</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-muted-foreground text-sm"
        >
          <p>
            Need group rates for 10+ attendees?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for custom pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
