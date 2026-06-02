"use client";

import { motion } from "framer-motion";
import { HardHat, Factory, Pickaxe, Package, Truck, Droplet, Cog, Anchor, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Construction", icon: HardHat, useCase: "High-Altitude Working", benefit: "Fall detection & rapid response" },
  { name: "Factories", icon: Factory, useCase: "Heavy Machinery", benefit: "Proximity alerts & collision avoidance" },
  { name: "Mining", icon: Pickaxe, useCase: "Subterranean Ops", benefit: "Environmental gas & collapse monitoring" },
  { name: "Warehousing", icon: Package, useCase: "Inventory Management", benefit: "Forklift collision prevention" },
  { name: "Logistics", icon: Truck, useCase: "Fleet Management", benefit: "Driver fatigue & location tracking" },
  { name: "Oil & Gas", icon: Droplet, useCase: "Hazardous Environments", benefit: "Explosive gas & heat stress monitoring" },
  { name: "Manufacturing", icon: Cog, useCase: "Assembly Lines", benefit: "Ergonomic & repetitive strain analysis" },
  { name: "Ports", icon: Anchor, useCase: "Cargo Handling", benefit: "Crane operation safety & geofencing" },
  { name: "Smart Cities", icon: Building2, useCase: "Municipal Maintenance", benefit: "Distributed workforce tracking" }
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Global Applications</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Every Industry</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            ARIS is highly adaptable. Its modular hardware and flexible software architecture make it the perfect safety solution across diverse, high-risk industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 flex items-start gap-4 group hover:-translate-y-1 transition-transform duration-300 hover:border-primary/50"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{ind.name}</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-text-secondary"><span className="text-white font-semibold">Use Case:</span> {ind.useCase}</p>
                  <p className="text-text-secondary"><span className="text-success font-semibold">Benefit:</span> {ind.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}