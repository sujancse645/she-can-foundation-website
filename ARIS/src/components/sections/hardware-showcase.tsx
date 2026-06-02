"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Thermometer, Radar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const hardware = [
  {
    id: "esp32",
    name: "ESP32",
    role: "Edge Controller",
    icon: Cpu,
    color: "text-primary",
    border: "border-primary",
    specs: ["Dual-core 240MHz", "Wi-Fi & Bluetooth", "Ultra-low power"],
    status: "ONLINE"
  },
  {
    id: "mpu6050",
    name: "MPU6050",
    role: "Motion/Fall Detection",
    icon: Activity,
    color: "text-danger",
    border: "border-danger",
    specs: ["3-axis Gyroscope", "3-axis Accelerometer", "Digital Motion Processor"],
    status: "CALIBRATED"
  },
  {
    id: "dht22",
    name: "DHT22",
    role: "Environment Sensor",
    icon: Thermometer,
    color: "text-warning",
    border: "border-warning",
    specs: ["-40 to 80°C Temp", "0-100% Humidity", "0.5°C Accuracy"],
    status: "READING"
  },
  {
    id: "hcsr04",
    name: "HC-SR04",
    role: "Obstacle Radar",
    icon: Radar,
    color: "text-success",
    border: "border-success",
    specs: ["2cm - 400cm Range", "3mm Resolution", "Ultrasonic"],
    status: "SCANNING"
  },
  {
    id: "neo6m",
    name: "NEO-6M",
    role: "GPS Module",
    icon: MapPin,
    color: "text-secondary",
    border: "border-secondary",
    specs: ["50 Channels", "Time-To-First-Fix", "Anti-jamming tech"],
    status: "LOCKED"
  }
];

export function HardwareShowcaseSection() {
  return (
    <section id="hardware-showcase" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Edge Devices</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hardware Integration</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            ARIS relies on a robust network of industry-standard sensors powered by the versatile ESP32 microcontroller, ensuring low-latency data transmission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {hardware.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className={cn("absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl", item.color.replace('text', 'bg'))} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-current transition-colors", item.color)}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className={cn("text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/5 border border-white/10", item.color)}>
                    {item.status}
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="text-xl font-bold text-white mb-1 font-mono tracking-tight">{item.name}</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">{item.role}</p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4 mt-auto">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-text-secondary">
                      <div className={cn("w-1 h-1 rounded-full", item.color.replace('text', 'bg'))} />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}