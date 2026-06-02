"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2, Clock, MapPin, User, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const incidents = [
  { id: "INC-2026-881", time: "10:42 AM", type: "Fall Detected", worker: "John Smith (W-742)", severity: "critical", status: "Detected", location: "Sector 4" },
  { id: "INC-2026-880", time: "09:15 AM", type: "High Temp", worker: "Sarah Connor (W-102)", severity: "warning", status: "Verified", location: "Boiler Room" },
  { id: "INC-2026-879", time: "08:30 AM", type: "Proximity Alert", worker: "Mike Ross (W-331)", severity: "warning", status: "Resolved", location: "Loading Dock" },
];

export function IncidentResponseSection() {
  return (
    <section id="incident-response" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Automated Workflows</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Incident Response Center</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            When an anomaly is detected, ARIS automatically generates a rich incident report containing telemetry, GPS location, and worker details, initiating a rapid response workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Active Incident List */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-6">Recent Incidents</h4>
            {incidents.map((inc, idx) => (
              <motion.div 
                key={inc.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-4 hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-sm font-mono text-text-secondary">
                    <FileText className="w-4 h-4" /> {inc.id}
                  </div>
                  <div className="text-sm font-mono text-text-secondary">{inc.time}</div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("p-2 rounded-full", inc.severity === 'critical' ? 'bg-danger/20 text-danger' : 'bg-warning/20 text-warning')}>
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg">{inc.type}</h5>
                    <div className="flex items-center gap-4 mt-1 text-sm text-text-secondary">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {inc.worker}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {inc.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex gap-2">
                    {['Detected', 'Verified', 'Assigned', 'Resolved'].map((step, stepIdx) => {
                      const isActive = step === inc.status;
                      const isPast = ['Detected', 'Verified', 'Assigned', 'Resolved'].indexOf(step) <= ['Detected', 'Verified', 'Assigned', 'Resolved'].indexOf(inc.status);
                      
                      return (
                        <div key={stepIdx} className={cn("text-[10px] uppercase font-bold px-2 py-1 rounded", 
                          isActive ? "bg-primary text-background" : 
                          isPast ? "bg-primary/20 text-primary" : "bg-white/5 text-text-secondary"
                        )}>
                          {step}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow Visualization */}
          <div className="glass-panel p-8 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white mb-8">Automated Response Timeline</h4>
            <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
              {[
                { title: "Anomaly Detected", desc: "Edge device flags abnormal sensor reading and pushes to cloud via MQTT.", icon: ShieldAlert, color: "text-danger" },
                { title: "Report Auto-Generated", desc: "System compiles 10-second historical data buffer and exact GPS coordinates.", icon: FileText, color: "text-primary" },
                { title: "Supervisor Alerted", desc: "Push notifications and SMS dispatched to nearest safety officers.", icon: Clock, color: "text-warning" },
                { title: "Response Coordinated", desc: "Rescue team dispatched to exact geofenced location.", icon: CheckCircle2, color: "text-success" },
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[21px] top-0 bg-background p-1 border-2 border-white/20 rounded-full">
                    <step.icon className={cn("w-6 h-6", step.color)} />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-1">{step.title}</h5>
                  <p className="text-text-secondary">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}