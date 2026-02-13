import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Trophy, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Expert Trainers",
      description: "Our certified coaches will guide you to reach your peak performance safely and effectively."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Strong Community",
      description: "Join a supportive tribe of like-minded individuals pushing each other to be better."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Open 24/7",
      description: "Train on your schedule with round-the-clock access to our premium facilities."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Member since 2022",
      text: "IronForge changed my life. The trainers actually care about your progress and the equipment is top notch.",
      rating: 5
    },
    {
      name: "Mike Ross",
      role: "CrossFit Athlete",
      text: "The atmosphere here is unmatched. It's not just a gym, it's a place where you discover what you're capable of.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Yoga Enthusiast",
      text: "Clean facilities, great classes, and a welcoming environment. Best gym investment I've ever made.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Gym Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Welcome to IronForge</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight uppercase">
              Build Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Premium equipment, expert coaching, and a community that drives you forward. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-full font-bold uppercase tracking-wider hover:border-white transition-all">
                  View Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-secondary/50 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('/images/weights.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Ready to Transform?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join 500+ members who have already taken the first step towards a stronger, healthier life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-xl rounded-full font-bold uppercase tracking-wider shadow-2xl">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">What Members Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border/50 relative"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{item.text}"</p>
                <div>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-xs text-primary uppercase tracking-wide font-medium">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
