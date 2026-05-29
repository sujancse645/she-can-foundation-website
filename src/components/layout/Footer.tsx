import Link from "next/link";
import { Globe, MessageCircle, Heart, Users, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-space-grotesk font-bold text-2xl tracking-tighter text-foreground">
                She Can.
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering women and transforming futures globally through education, resources, and community support.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="/contact" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="/donate" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Heart size={20} />
              </Link>
              <Link href="/volunteer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Users size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Programs</Link>
              </li>
              <li>
                <Link href="/campaigns" className="text-muted-foreground hover:text-primary transition-colors text-sm">Campaigns</Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">Events</Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Become a Volunteer</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-foreground">Support Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors text-sm">Make a Donation</Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Partners</Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Empowerment Blvd, Innovation City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@shecanfoundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} She Can Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
