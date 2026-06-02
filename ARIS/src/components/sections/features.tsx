"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Map, Radar, ThermometerSun, BellRing, Ambulance, BrainCircuit, Users, Cloud, Lock, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { name: "Real-Time Monitoring", icon: Activity },
  { name: "Fall Detection", icon: ShieldCheck },
  { name: "GPS Tracking", icon: Map },
  { name: "Obstacle Detection", icon: Radar },
  { name: "Environmental Monitoring", icon: ThermometerSun },
  { name: "Incident Management", icon: BellRing },
  { name: "Emergency Response", icon: Ambulance },
  { name: "Predictive Insights", icon: BrainCircuit },
  { name: "Worker Protection", icon: Users },
  { name: "Cloud Dashboard", icon: Cloud },
  { name: "Role-Based Access", icon: Lock },
  { name: "Industrial Analytics", icon: BarChart3 },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Comprehensive Suite</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors cursor-pointer"
            >
              <feat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-white font-semibold text-sm md:text-base">{feat.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}