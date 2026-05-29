"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Target, Heart, Shield, Globe2 } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    { icon: Target, title: "Mission Driven", desc: "Our every action is guided by our core mission to empower and uplift communities." },
    { icon: Heart, title: "Compassion First", desc: "We operate with profound empathy, treating everyone we serve with dignity." },
    { icon: Shield, title: "Integrity", desc: "Transparency and honesty are the bedrock of our foundation's operations." },
    { icon: Globe2, title: "Global Impact", desc: "While we act locally, our vision and framework are built for global transformation." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Parallax Hero */}
      <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png')` }}
          />
        </motion.div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-poppins">
              From a small initiative to a global movement, discover how we are changing the narrative for women worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <h4 className="text-primary font-semibold tracking-widest uppercase">Who We Are</h4>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold leading-tight">
                Empowering Voices, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Igniting Change.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The She Can Foundation was established with a singular, powerful belief: when you empower a woman, you empower an entire generation. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over a decade, we have worked relentlessly at the grassroots level to dismantle systemic barriers to education, healthcare, and financial independence. Our programs are designed not just to provide immediate relief, but to build sustainable, long-term resilience in the communities we serve.
              </p>
              
              <div className="flex gap-8 pt-4 border-t border-border">
                <div>
                  <h5 className="text-3xl font-bold text-foreground">10+</h5>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Active</p>
                </div>
                <div>
                  <h5 className="text-3xl font-bold text-foreground">50k+</h5>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Lives Changed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg" 
                  alt="Foundation Impact" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-medium text-lg">"Education is the most powerful weapon which you can use to change the world."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Animated Cards */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide our decisions and shape our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <val.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card/80 backdrop-blur-xl p-12 rounded-[3rem] border border-border shadow-2xl"
          >
            <h2 className="text-4xl font-space-grotesk font-bold mb-6">Join Our Movement</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are always looking for passionate individuals to join our team of volunteers, staff, and advocates. Together, we can build a world where every woman has the opportunity to thrive.
            </p>
            <a href="/volunteer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity group">
              Become a Volunteer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
