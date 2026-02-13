import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function About() {
  const missionPoints = [
    "Foster a supportive, judgment-free community",
    "Provide professional-grade equipment for all levels",
    "Deliver expert coaching rooted in science",
    "Empower individuals to surpass their limits"
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Story" 
        subtitle="More than just a gym. We are a community dedicated to strength, resilience, and growth."
        image="/images/team.jpg"
      />

      {/* Story Section */}
      <section className="py-20 container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">The IronForge Way</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">Forging Strength Since 2015</h2>
            <p className="text-muted-foreground leading-relaxed">
              IronForge began in a small garage with a squat rack, a few rusty plates, and a dream. We wanted to create a space where serious training met serious community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we've grown into a state-of-the-art facility, but our core values haven't changed. We believe that strength is for everyone, and that the discipline you build in the gym translates to every other area of your life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
            <img 
              src="/images/team.jpg" 
              alt="Gym Team" 
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To create the ultimate training environment where every member feels empowered to become the strongest version of themselves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missionPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-4 bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Expert Trainers" },
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Classes Weekly" },
              { number: "24/7", label: "Gym Access" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
