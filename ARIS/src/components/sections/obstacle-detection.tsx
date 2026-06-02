"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ObstacleDetectionSection() {
  const [distance, setDistance] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => {
        const newDist = prev + (Math.random() - 0.6) * 20; // Bias towards getting closer
        return newDist < 10 ? 150 : newDist;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = (d: number) => {
    if (d > 100) return { label: "SAFE", color: "text-success", bg: "bg-success", border: "border-success" };
    if (d > 50) return { label: "WARNING", color: "text-warning", bg: "bg-warning", border: "border-warning" };
    return { label: "DANGER", color: "text-danger", bg: "bg-danger", border: "border-danger" };
  };

  const status = getStatus(distance);

  return (
    <section id="obstacle-detection" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-success font-semibold tracking-widest uppercase mb-4">HC-SR04 Integration</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Spatial Awareness Radar</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Continuous ultrasonic scanning detects approaching industrial vehicles, automated guided vehicles (AGVs), or hazardous moving machinery. Real-time proximity feedback warns workers before impact.
            </p>

            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-l-success flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">Green Zone</h4>
                  <p className="text-sm text-text-secondary">&gt; 100cm Distance</p>
                </div>
                <div className="text-success font-bold font-mono">SAFE</div>
              </div>
              
              <div className="glass-card p-6 border-l-4 border-l-warning flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">Yellow Zone</h4>
                  <p className="text-sm text-text-secondary">50cm - 100cm Distance</p>
                </div>
                <div className="text-warning font-bold font-mono">CAUTION</div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-danger flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">Red Zone</h4>
                  <p className="text-sm text-text-secondary">&lt; 50cm Distance</p>
                </div>
                <div className="text-danger font-bold font-mono">CRITICAL</div>
              </div>
            </div>
          </div>

          {/* Radar UI */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[400px] h-[400px] rounded-full border border-white/10 flex items-center justify-center overflow-hidden glass-card">
              
              {/* Radar Rings */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-success/30" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-warning/30" />
              <div className="absolute w-[100px] h-[100px] rounded-full border border-danger/30 bg-danger/5" />
              
              {/* Crosshairs */}
              <div className="absolute w-full h-px bg-white/10" />
              <div className="absolute h-full w-px bg-white/10" />

              {/* Radar Sweep */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-1/2 h-full top-0 right-0 origin-left"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, rgba(48, 209, 88, 0.2) 90deg, rgba(48, 209, 88, 0.8) 90deg, transparent 91deg)`
                }}
              />

              {/* Target Blip */}
              <motion.div 
                className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"
                animate={{
                  x: Math.cos(45) * (distance),
                  y: Math.sin(45) * (distance),
                  backgroundColor: status.bg === 'bg-danger' ? '#FF453A' : status.bg === 'bg-warning' ? '#FF9F0A' : '#30D158'
                }}
                transition={{ type: "spring", damping: 10 }}
              />

              {/* Center Worker */}
              <div className="absolute z-10 p-2 rounded-full bg-background border border-white/20 shadow-xl">
                <Navigation className="w-6 h-6 text-white rotate-45" />
              </div>
            </div>

            {/* Live Readout */}
            <div className={cn("mt-8 px-8 py-4 rounded-xl border flex items-center gap-6", status.bg.replace('bg-', 'bg-') + '/10', status.border)}>
              {distance < 50 && <AlertOctagon className={cn("w-8 h-8 animate-pulse", status.color)} />}
              <div>
                <div className="text-sm text-text-secondary uppercase tracking-widest mb-1">Live Distance</div>
                <div className="flex items-baseline gap-2">
                  <span className={cn("text-5xl font-mono font-bold", status.color)}>
                    {distance.toFixed(1)}
                  </span>
                  <span className="text-xl text-text-secondary">cm</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}