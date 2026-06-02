"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does fall detection work?",
    answer: "ARIS uses the MPU6050 6-axis motion tracking device (3-axis gyroscope + 3-axis accelerometer). Our proprietary algorithm analyzes the acceleration and orientation data in real-time on the ESP32 edge controller to distinguish between normal movements, sudden drops, and high-G impacts, minimizing false positives."
  },
  {
    question: "How accurate is GPS tracking?",
    answer: "The integrated NEO-6M GPS module provides high-precision location data with an accuracy of up to 2.5 meters in open environments. In enclosed spaces, ARIS can fall back on Wi-Fi triangulation and Bluetooth beaconing depending on your site's infrastructure."
  },
  {
    question: "Can multiple workers be monitored simultaneously?",
    answer: "Yes. The ARIS cloud architecture is built to scale. You can monitor thousands of concurrent edge devices. The dashboard supports clustering and sector-based views to maintain performance and clarity even with massive fleets."
  },
  {
    question: "How does emergency response function?",
    answer: "When a critical event (like a fall or high heat stress) is detected, the edge device immediately pushes an MQTT alert to the cloud. The platform instantly generates an incident report with exact GPS coordinates and sends automated push/SMS notifications to designated safety supervisors and rapid response teams."
  },
  {
    question: "Can ARIS scale to large organizations?",
    answer: "Absolutely. With a microservices backend powered by Node.js and scalable real-time databases, ARIS supports multi-tenant enterprise setups, Role-Based Access Control (RBAC), and custom API integrations for your existing ERP systems."
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Knowledge Base</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
              >
                <h4 className="text-lg font-bold text-white">{faq.question}</h4>
                <ChevronDown className={cn("w-5 h-5 text-primary transition-transform duration-300", openIdx === idx ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}