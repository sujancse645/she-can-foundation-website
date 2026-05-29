"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen, Globe2, Activity, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/30 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/30 blur-[150px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Transforming futures worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold tracking-tighter max-w-5xl leading-[1.1] mb-8"
          >
            Empowering Women. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Transforming Futures.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-poppins"
          >
            Together we build opportunities, dignity, education, and hope for communities worldwide. Join us in making a lasting impact today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/donate">
              <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-full">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-sm border-primary/20 hover:bg-primary/5">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Counters Section */}
      <section className="py-24 bg-card relative z-10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Women Empowered", value: "25,000+", icon: Users },
              { label: "Children Educated", value: "15,000+", icon: BookOpen },
              { label: "Global Volunteers", value: "500+", icon: Globe2 },
              { label: "Active Programs", value: "120+", icon: Activity },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-4xl font-space-grotesk font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg" 
                  alt="Women working together" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <div>
                <h4 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Story</h4>
                <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">We Believe in the Power of Potential.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to eradicate inequality, the She Can Foundation has grown into a global movement. We provide the tools, education, and resources necessary for women and children in marginalized communities to break the cycle of poverty.
                </p>
              </div>
              
              <ul className="space-y-4">
                {['Grassroots Community Building', 'Sustainable Skill Development', 'Global Health Initiatives'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="outline" className="mt-4 rounded-full px-8">Read Our Full Story</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-32 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-space-grotesk font-bold text-primary-foreground mb-6"
          >
            Become the reason someone smiles today.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 mb-10"
          >
            Join our global network of changemakers. Your time and skills can transform a community forever.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/volunteer">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full h-14 px-10 text-lg">
                Join Our Volunteer Network
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
