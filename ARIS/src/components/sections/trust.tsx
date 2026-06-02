"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Map, Activity, Zap, Server } from "lucide-react";

const badges = [
  { icon: Cpu, label: "Industrial IoT" },
  { icon: Zap, label: "ESP32 Powered" },
  { icon: Map, label: "GPS Enabled" },
  { icon: Activity, label: "Real-Time Monitoring" },
  { icon: Server, label: "Edge Intelligence" },
  { icon: ShieldCheck, label: "Emergency Response Ready" },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "Latency" },
  { value: "AES-256", label: "Encryption" },
  { value: "24/7", label: "Monitoring" },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Enterprise Grade Reliability
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Trusted by Global Industries
          </motion.h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex flex-col items-center justify-center p-6 glass-card group hover:-translate-y-2 transition-transform duration-300"
            >
              <badge.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-primary transition-colors" />
              <span className="text-sm text-center font-medium text-text-secondary group-hover:text-white transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (0.1 * idx) }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-text-secondary font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}