"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "VP of Operations",
    company: "Global Logistics Corp",
    content: "ARIS has fundamentally changed how we approach warehouse safety. The real-time collision avoidance alone paid for the system in the first month.",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Safety Officer",
    company: "Nordic Mining Solutions",
    content: "Operating miles underground presents unique challenges. The ARIS environmental monitoring and precise GPS location data gives us unprecedented peace of mind.",
  },
  {
    name: "Marcus Weber",
    role: "Site Director",
    company: "Apex Construction",
    content: "The fall detection engine is incredibly accurate. We've seen a 40% reduction in response time for on-site incidents since implementing the ARIS digital twin.",
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Enterprise Adoption</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 italic">
                "{test.content}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-bold">{test.name}</h4>
                <p className="text-sm text-primary">{test.role}</p>
                <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">{test.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}