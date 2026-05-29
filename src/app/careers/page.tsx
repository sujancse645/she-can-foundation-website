"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, HeartHandshake, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Program Director - Women's Health",
    location: "Mumbai, India (Hybrid)",
    type: "Full-time",
    department: "Operations",
    desc: "Lead our maternal health clinic initiatives across rural sectors. Requires 5+ years of NGO healthcare management.",
  },
  {
    title: "Community Outreach Lead",
    location: "Remote",
    type: "Full-time",
    department: "Communications",
    desc: "Develop and execute grassroots campaigns to engage local communities and drive volunteer participation.",
  },
  {
    title: "Grants & Partnerships Manager",
    location: "New York, USA (Remote)",
    type: "Full-time",
    department: "Development",
    desc: "Identify, write, and manage institutional grants. Build relationships with major corporate sponsors.",
  },
  {
    title: "Volunteer Coordinator",
    location: "Nairobi, Kenya",
    type: "Part-time",
    department: "Operations",
    desc: "Manage the onboarding, training, and deployment of local volunteers for our education programs.",
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <span className="text-sm font-semibold tracking-wider uppercase">Careers at She Can</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 leading-tight">
              Build a career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">purpose.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're looking for passionate, driven individuals who want to dedicate their skills to empowering women and transforming communities. If you want your daily work to change lives, you belong here.
            </p>
            <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90" onClick={() => {
              document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Open Roles
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="Women working together in office" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-card py-24 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-space-grotesk font-bold mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Impact First", icon: HeartHandshake, desc: "Everything we do is measured by the real-world impact it creates." },
              { title: "Radical Empathy", icon: Users, desc: "We lead with understanding, both for our communities and our team." },
              { title: "Innovation", icon: Zap, desc: "We constantly seek new, better ways to solve systemic problems." },
              { title: "Safe Space", icon: Shield, desc: "An inclusive environment where every voice is heard and valued." }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div id="open-roles" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-4">Open Positions</h2>
          <p className="text-lg text-muted-foreground">Join our global mission. Don't see a fit? Send your resume anyway.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border hover:border-primary/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-muted-foreground mb-4 max-w-xl">{job.desc}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/70">
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                </div>
              </div>
              
              <div className="shrink-0">
                <Link href="/careers/apply">
                  <Button className="w-full md:w-auto rounded-full group/btn">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
