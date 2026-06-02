"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const benefits = [
    "Proactive hazard detection",
    "Instant emergency response",
    "Comprehensive environmental monitoring",
    "Data-driven safety insights"
  ];

  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-secondary font-semibold tracking-widest uppercase mb-4">About ARIS</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transforming Industrial Safety through Intelligence
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Industrial accidents present significant challenges to worker well-being and operational continuity. ARIS was born from a singular mission: <strong className="text-white">To protect workers through intelligent, real-time monitoring.</strong>
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Our vision is to create safer workplaces worldwide by bridging the gap between cutting-edge IoT edge devices and enterprise cloud analytics. We eliminate blind spots in industrial safety.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 className="w-6 h-6 text-success" />
                  <span className="text-lg font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Timeline/Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] glass-panel p-8"
          >
            <div className="absolute top-1/2 left-8 bottom-8 w-px bg-white/10 -translate-y-1/2" />
            
            <div className="space-y-12 relative z-10 h-full flex flex-col justify-center">
              {[
                { title: "The Challenge", desc: "Thousands of industrial incidents occur annually due to lack of visibility.", color: "bg-danger" },
                { title: "The Innovation", desc: "Edge computing via ESP32 combined with cloud analytics changes the paradigm.", color: "bg-secondary" },
                { title: "The Result", desc: "Zero-latency response, predictive safety, and protected lives.", color: "bg-success" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (idx * 0.2) }}
                  className="flex gap-6 relative"
                >
                  <div className={`w-4 h-4 rounded-full ${item.color} mt-1.5 shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-10 shrink-0`} />
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}