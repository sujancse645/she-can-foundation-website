"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Activity, AlertTriangle, TrendingUp, ThermometerSun } from "lucide-react";
import { cn } from "@/lib/utils";

export function AiIntelligenceSection() {
  const insights = [
    {
      title: "High Temperature Risk",
      desc: "Predicted 85% chance of heat exhaustion in Sector 4 within 2 hours based on current humidity trends.",
      icon: ThermometerSun,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/30"
    },
    {
      title: "Worker Immobility Warning",
      desc: "Unit W-102 has shown minimal movement for 45 minutes in a non-rest zone. Wellness check recommended.",
      icon: Activity,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/30"
    },
    {
      title: "Repeated Fall Pattern",
      desc: "3 minor trips detected near Loading Bay B this week. Structural hazard likely present.",
      icon: AlertTriangle,
      color: "text-danger",
      bg: "bg-danger/10",
      border: "border-danger/30"
    }
  ];

  return (
    <section id="ai-intelligence" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <BrainCircuit className="w-5 h-5" /> Machine Learning Engine
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Safety Intelligence</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            ARIS doesn't just record data; it understands it. Our cloud AI analyzes historical and real-time telemetry to predict hazards before they occur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* AI Scores */}
          <div className="lg:col-span-4 space-y-6">
            {[
              { label: "Overall Safety Score", value: 92, color: "text-success", bg: "bg-success" },
              { label: "Environmental Risk", value: 14, color: "text-warning", bg: "bg-warning" },
              { label: "Movement Risk", value: 5, color: "text-primary", bg: "bg-primary" }
            ].map((score, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-white">{score.label}</span>
                  <span className={cn("text-2xl font-black font-mono", score.color)}>{score.value}/100</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                    className={cn("h-full rounded-full", score.bg)}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Predictive Insights */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {insights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className={cn("glass-card p-6 border group hover:border-white/30 transition-colors", insight.border)}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", insight.bg, insight.color)}>
                    <insight.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{insight.title}</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">{insight.desc}</p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                      <TrendingUp className="w-4 h-4" /> View AI Analysis
                    </button>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6 border border-white/10 flex flex-col items-center justify-center text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white/5"
              >
                <BrainCircuit className="w-12 h-12 text-primary mb-4 animate-pulse" />
                <h4 className="text-xl font-bold text-white mb-2">Generate Report</h4>
                <p className="text-sm text-text-secondary mb-6">Compile AI predictive recommendations for the next 7 days.</p>
                <button className="px-6 py-2 bg-primary text-background font-bold rounded-lg hover:bg-secondary transition-colors w-full">
                  Run Analysis
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}