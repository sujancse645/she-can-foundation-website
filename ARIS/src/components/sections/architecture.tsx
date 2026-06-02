"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, MonitorSmartphone, AlertTriangle, ArrowDown } from "lucide-react";

const sensors = [
  { name: "MPU6050", role: "Fall Detection", color: "text-danger" },
  { name: "DHT22", role: "Environment", color: "text-warning" },
  { name: "HC-SR04", role: "Obstacles", color: "text-success" },
  { name: "NEO-6M", role: "GPS Location", color: "text-primary" },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">System Architecture</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">End-to-End Data Flow</h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Sensors Level */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full mb-8">
            {sensors.map((sensor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className={`font-mono font-bold text-lg mb-1 ${sensor.color}`}>{sensor.name}</div>
                <div className="text-xs text-text-secondary uppercase">{sensor.role}</div>
              </motion.div>
            ))}
          </div>

          <ArrowDown className="text-primary w-8 h-8 mb-8 animate-bounce opacity-50" />

          {/* Edge Controller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md glass-card p-6 flex items-center justify-center gap-4 border-primary/30 shadow-[0_0_30px_rgba(0,212,255,0.1)] relative group"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <Cpu className="w-10 h-10 text-primary" />
            <div className="text-left z-10">
              <h4 className="text-xl font-bold text-white">ESP32 Edge Controller</h4>
              <p className="text-sm text-text-secondary">Local Processing & Aggregation</p>
            </div>
          </motion.div>

          <ArrowDown className="text-primary w-8 h-8 my-8 animate-bounce opacity-50" />

          {/* Cloud Platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-lg glass-card p-6 flex items-center justify-center gap-4 border-secondary/30 relative group"
          >
            <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
            <Cloud className="w-10 h-10 text-secondary" />
            <div className="text-left z-10">
              <h4 className="text-xl font-bold text-white">ARIS Cloud Platform</h4>
              <p className="text-sm text-text-secondary">Real-time DB, Analytics & AI Engine</p>
            </div>
          </motion.div>

          <ArrowDown className="text-secondary w-8 h-8 my-8 animate-bounce opacity-50" />

          {/* Output Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 flex items-center gap-4"
            >
              <MonitorSmartphone className="w-8 h-8 text-success" />
              <div>
                <h4 className="text-lg font-bold text-white">Safety Dashboard</h4>
                <p className="text-xs text-text-secondary">Web & Mobile Interfaces</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass-card p-6 flex items-center gap-4 border-danger/20"
            >
              <AlertTriangle className="w-8 h-8 text-danger" />
              <div>
                <h4 className="text-lg font-bold text-white">Response Center</h4>
                <p className="text-xs text-text-secondary">Automated Alerts & Dispatch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}