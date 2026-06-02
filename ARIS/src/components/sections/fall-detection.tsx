"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Wifi, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function FallDetectionSection() {
  const [isFalling, setIsFalling] = useState(false);

  const simulateFall = () => {
    setIsFalling(true);
    setTimeout(() => setIsFalling(false), 5000);
  };

  return (
    <section id="fall-detection" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-danger font-semibold tracking-widest uppercase mb-4">MPU6050 Integration</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Intelligent Fall Detection Engine</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Simulation Visuals */}
          <div className="relative h-[500px] glass-panel p-8 flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
            
            {/* Worker Representation */}
            <motion.div
              animate={isFalling ? { 
                rotate: 90, 
                y: 100, 
                backgroundColor: 'rgba(255, 69, 58, 0.2)',
                borderColor: 'rgba(255, 69, 58, 1)'
              } : { 
                rotate: 0, 
                y: 0,
                backgroundColor: 'rgba(48, 209, 88, 0.1)',
                borderColor: 'rgba(48, 209, 88, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="w-24 h-48 border-2 rounded-full flex flex-col items-center justify-center relative z-10"
            >
              <div className={cn("w-12 h-12 rounded-full mb-4 transition-colors", isFalling ? "bg-danger" : "bg-success")} />
              <div className={cn("w-2 h-16 rounded-full transition-colors", isFalling ? "bg-danger/50" : "bg-success/50")} />
            </motion.div>

            {/* Alert Overlay */}
            {isFalling && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-danger/20 backdrop-blur-sm z-20 flex flex-col items-center justify-center"
              >
                <ShieldAlert className="w-24 h-24 text-danger mb-4 animate-pulse" />
                <h3 className="text-4xl font-bold text-white tracking-widest uppercase text-glow">Fall Detected</h3>
                <p className="text-white mt-2 font-mono">Incident Automatically Generated</p>
              </motion.div>
            )}

            <button 
              onClick={simulateFall}
              disabled={isFalling}
              className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors disabled:opacity-50"
            >
              Simulate Impact
            </button>
          </div>

          {/* Detection Pipeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Detection Pipeline</h3>
            <div className="space-y-6">
              {[
                { title: "Acceleration Analysis", desc: "MPU6050 continuously monitors 3-axis acceleration.", icon: Activity },
                { title: "Orientation Detection", desc: "Gyroscope tracks sudden changes in pitch and roll.", icon: Zap },
                { title: "Impact Detection", desc: "Free-fall followed by high-G impact triggers the algorithm.", icon: ShieldAlert },
                { title: "Emergency Trigger", desc: "Alert sent to cloud via ESP32 with precise GPS location.", icon: Wifi },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn("glass-card p-4 flex items-center gap-4 border-l-4", 
                    isFalling ? "border-l-danger bg-danger/5" : "border-l-primary"
                  )}
                >
                  <div className={cn("p-3 rounded-lg", isFalling ? "bg-danger/20 text-danger" : "bg-primary/20 text-primary")}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    <p className="text-sm text-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}