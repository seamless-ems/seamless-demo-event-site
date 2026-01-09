import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Sarah Chen",
    role: "Chief Marketing Officer",
    company: "Global Brand Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Michael Torres",
    role: "VP of Partnerships",
    company: "SportsTech Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Amanda Williams",
    role: "Head of Sponsorships",
    company: "Major League Sports",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "David Park",
    role: "CEO & Founder",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Jennifer Okafor",
    role: "Director of Brand Strategy",
    company: "Entertainment Corp.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Robert Kim",
    role: "Global Partnerships Lead",
    company: "Tech Giants Ltd.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
];

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="py-24 bg-secondary/30">
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

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={speaker.linkedin}
                    className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-1">
                  {speaker.name}
                </h3>
                <p className="text-primary text-sm mb-1">{speaker.role}</p>
                <p className="text-muted-foreground text-sm">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
          <a href="#" className="spx-button-outline inline-block">
            Apply to Speak
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
