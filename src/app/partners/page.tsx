"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, Users, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const partners = [
  { name: "Global Health Initiative", type: "Corporate Sponsor" },
  { name: "Tech for Good", type: "Technology Partner" },
  { name: "Women's Rights Council", type: "Advocacy Partner" },
  { name: "Eco Builders", type: "Infrastructure Partner" },
  { name: "EduFund", type: "Education Sponsor" },
  { name: "Community Care Trust", type: "Local Partner" },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Handshake className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Collaboration is at the heart of our success. We are proud to work with incredible organizations that share our vision of empowering women and building resilient communities.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "Corporate Partners", value: "45+", icon: Building2 },
            { label: "Community Allies", value: "120+", icon: Users },
            { label: "Projects Funded", value: "300+", icon: HeartHandshake },
            { label: "Countries Reached", value: "15", icon: Handshake },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 text-center"
            >
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-4xl font-space-grotesk font-bold mb-2">{stat.value}</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-48 bg-card border border-border hover:border-primary/50 hover:shadow-xl rounded-3xl flex flex-col items-center justify-center p-6 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center">{partner.name}</h3>
              <p className="text-sm text-muted-foreground px-4 py-1 rounded-full bg-muted">{partner.type}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-20 bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="text-4xl font-space-grotesk font-bold mb-6">Become a Partner</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Are you an organization looking to make a real impact? Partner with us to scale our initiatives and create lasting change for women worldwide.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 bg-white text-primary hover:bg-white/90 rounded-full text-lg group">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
