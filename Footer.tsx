import { Dumbbell, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-md">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                IRON<span className="text-primary">FORGE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Forging elite fitness through dedication, community, and state-of-the-art equipment. Your journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Fitness Blvd, Muscle City, MC 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@ironforge.gym</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-foreground font-medium">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground font-medium">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground font-medium">7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} IronForge Gym. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full hover:bg-background">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full hover:bg-background">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full hover:bg-background">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
