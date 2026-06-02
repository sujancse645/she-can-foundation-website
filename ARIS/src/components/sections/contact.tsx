"use client";

import { motion } from "framer-motion";
import { Send, Building, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Get Started</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Secure Your Workforce Today</h2>
            <p className="text-text-secondary text-lg mb-12 max-w-lg">
              Ready to deploy the ARIS platform in your industrial facility? Contact our enterprise sales team for a custom deployment strategy and live demonstration.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl glass border-primary/30 text-primary">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Global Headquarters</h4>
                  <p className="text-text-secondary">100 Innovation Drive, Tech Park<br/>San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl glass border-primary/30 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Enterprise Sales</h4>
                  <p className="text-text-secondary">+1 (800) 555-ARIS</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl glass border-primary/30 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Support</h4>
                  <p className="text-text-secondary">enterprise@aris.io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request Demo & Pricing</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Work Email</label>
                <input type="email" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Company Size</label>
                <select className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your safety requirements..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary hover:bg-secondary text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Submit Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}