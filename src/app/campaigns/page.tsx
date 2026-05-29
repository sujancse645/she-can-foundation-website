"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Users } from "lucide-react";
import Link from "next/link";

const campaigns = [
  {
    title: "Project Educate: Safe Transport for Girls",
    desc: "In many rural areas, the journey to school is unsafe for young girls. This campaign funds secure community buses and bicycles, ensuring 5,000 girls can safely complete their education.",
    goal: 500000,
    raised: 350000,
    donors: 1240,
    daysLeft: 14,
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png"
  },
  {
    title: "Women's Micro-Enterprise Fund",
    desc: "Providing zero-interest micro-loans to 500 women entrepreneurs in developing regions to start sustainable agricultural businesses and support their families.",
    goal: 250000,
    raised: 125000,
    donors: 856,
    daysLeft: 30,
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png"
  },
  {
    title: "Emergency Maternal Health Clinics",
    desc: "Building and staffing 3 emergency maternal health clinics in areas with the highest infant mortality rates. This project will directly save lives.",
    goal: 1000000,
    raised: 890000,
    donors: 4320,
    daysLeft: 5,
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
  }
];

export default function CampaignsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1593113589914-07553c6c2999?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl z-0" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold tracking-wider uppercase">Active Campaigns</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6">
            Fund the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Future.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our urgent funding needs. 100% of your donation to these campaigns goes directly to the field.
          </p>
        </motion.div>

        <div className="space-y-12">
          {campaigns.map((campaign, i) => {
            const percent = Math.round((campaign.raised / campaign.goal) * 100);
            
            return (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex flex-col lg:flex-row gap-8 bg-card/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 lg:p-8 shadow-2xl hover:border-primary/30 transition-colors group"
              >
                {/* Image */}
                <div className="lg:w-2/5 shrink-0 overflow-hidden rounded-2xl relative aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={campaign.img} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <Clock size={14} className="text-primary" />
                    {campaign.daysLeft} Days Left
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 flex flex-col justify-between py-2">
                  <div>
                    <h2 className="text-3xl font-space-grotesk font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {campaign.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {campaign.desc}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Progress Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-border/50">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1.5"><Target size={14}/> Goal</p>
                        <p className="text-xl font-bold">₹{(campaign.goal / 1000).toFixed(0)}k</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Raised</p>
                        <p className="text-xl font-bold text-primary">₹{(campaign.raised / 1000).toFixed(0)}k</p>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1.5"><Users size={14}/> Donors</p>
                        <p className="text-xl font-bold">{campaign.donors}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Progress</p>
                        <p className="text-xl font-bold">{percent}%</p>
                      </div>
                    </div>

                    {/* Progress Bar & CTA */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <div className="w-full sm:w-2/3">
                        <Progress value={percent} className="h-3 bg-muted" />
                      </div>
                      <div className="w-full sm:w-1/3">
                        <Link href="/donate" className="w-full">
                          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                            Support Campaign
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
