import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, MapPin, Users } from "lucide-react";

const days = [
  {
    date: "June 18",
    title: "Day 1 - Ignite",
    events: [
      {
        time: "8:00 AM",
        title: "Registration & Welcome",
        description: "Check in, grab your badge, and enjoy breakfast networking.",
        location: "Main Hall",
        type: "networking",
      },
      {
        time: "9:30 AM",
        title: "Opening Keynote: The Future of Sponsorship",
        description: "Setting the stage for three days of transformation.",
        location: "Grand Ballroom",
        speaker: "Mark Harrison",
        type: "keynote",
      },
      {
        time: "11:00 AM",
        title: "Panel: Measuring What Matters",
        description: "ROI frameworks that drive real business outcomes.",
        location: "Innovation Stage",
        type: "panel",
      },
      {
        time: "12:30 PM",
        title: "Networking Lunch",
        description: "Connect with peers over a curated dining experience.",
        location: "Terrace",
        type: "networking",
      },
      {
        time: "2:00 PM",
        title: "Breakout Sessions",
        description: "Choose from 6 specialized tracks based on your interests.",
        location: "Various Rooms",
        type: "session",
      },
      {
        time: "6:00 PM",
        title: "Welcome Reception",
        description: "Evening cocktails with live entertainment.",
        location: "Rooftop Lounge",
        type: "networking",
      },
    ],
  },
  {
    date: "June 19",
    title: "Day 2 - Transform",
    events: [
      {
        time: "8:30 AM",
        title: "Morning Energizer & Breakfast",
        description: "Start the day with movement and mindfulness.",
        location: "Main Hall",
        type: "networking",
      },
      {
        time: "9:30 AM",
        title: "Keynote: AI & The New Sponsorship Playbook",
        description: "How technology is reshaping partnership strategies.",
        location: "Grand Ballroom",
        type: "keynote",
      },
      {
        time: "11:00 AM",
        title: "Workshop: Building Purpose-Driven Partnerships",
        description: "Hands-on session for creating authentic brand alignment.",
        location: "Workshop Studios",
        type: "workshop",
      },
      {
        time: "1:00 PM",
        title: "Power Lunch & Roundtables",
        description: "Topic-focused discussions over lunch.",
        location: "Various",
        type: "networking",
      },
      {
        time: "3:00 PM",
        title: "Innovation Showcase",
        description: "Demos from leading sponsorship technology providers.",
        location: "Innovation Stage",
        type: "session",
      },
      {
        time: "7:00 PM",
        title: "Gala Dinner",
        description: "Celebrate excellence with awards and entertainment.",
        location: "Grand Ballroom",
        type: "networking",
      },
    ],
  },
  {
    date: "June 20",
    title: "Day 3 - Elevate",
    events: [
      {
        time: "9:00 AM",
        title: "Leadership Breakfast",
        description: "Intimate conversations with C-suite executives.",
        location: "Executive Lounge",
        type: "networking",
      },
      {
        time: "10:30 AM",
        title: "Panel: Next Gen Sponsorship Leaders",
        description: "Fresh perspectives from rising industry stars.",
        location: "Innovation Stage",
        type: "panel",
      },
      {
        time: "12:00 PM",
        title: "Closing Keynote: Your Action Plan",
        description: "Leave with a clear roadmap for implementation.",
        location: "Grand Ballroom",
        type: "keynote",
      },
      {
        time: "1:30 PM",
        title: "Farewell Lunch & Networking",
        description: "Final connections and see-you-next-year moments.",
        location: "Main Hall",
        type: "networking",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  keynote: "bg-primary",
  panel: "bg-spx-purple-light",
  workshop: "bg-spx-gold",
  session: "bg-green-500",
  networking: "bg-blue-500",
};

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            Event Schedule
          </span>
          <h2 className="section-heading mb-6">
            Three Days of <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A carefully curated agenda designed to maximize learning, 
            connection, and actionable insights.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {days.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-4 rounded-xl font-display font-semibold transition-all duration-300 ${
                activeDay === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card hover:border-primary/50"
              }`}
            >
              <span className="block text-sm opacity-70">{day.date}</span>
              <span className="block">{day.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {days[activeDay].events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 flex flex-col md:flex-row gap-6 group hover:border-primary/50 transition-all"
              >
                {/* Time */}
                <div className="md:w-32 shrink-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${typeColors[event.type]}`}
                    />
                    <h3 className="font-display font-semibold text-lg">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {event.location}
                    </span>
                    {event.speaker && (
                      <span className="flex items-center gap-1">
                        <Users size={14} className="text-primary" />
                        {event.speaker}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`w-3 h-3 rounded-full ${color}`} />
              <span className="capitalize">{type}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
