"use client";

import { ShieldCheck, Globe, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  const links = {
    Product: ["Dashboard", "Features", "Pricing", "Hardware Setup", "API Docs"],
    Company: ["About Us", "Careers", "Newsroom", "Contact", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  };

  return (
    <footer id="footer" className="bg-background pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black tracking-tighter text-white">ARIS</span>
            </Link>
            <p className="text-text-secondary mb-8 max-w-sm">
              Advanced Real-Time Industrial Safety. Protecting the global workforce through intelligent edge computing and cloud analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors text-text-secondary">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors text-text-secondary">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors text-text-secondary">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Product</h4>
            <ul className="space-y-4">
              {links.Product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              {links.Company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Legal</h4>
            <ul className="space-y-4">
              {links.Legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            ARIS &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            SYSTEM OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}