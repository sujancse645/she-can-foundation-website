"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    title: "Annual Empowerment Gala 2024",
    date: "October 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Grand Plaza Hotel, NY",
    desc: "Join us for an unforgettable evening celebrating the achievements of the women in our programs. Includes keynote speakers, dinner, and a charity auction.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg",
    type: "Upcoming"
  },
  {
    title: "Global Leadership Summit",
    date: "November 5-7, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual & Geneva, CH",
    desc: "A three-day intensive summit bringing together our community leaders from 15 different countries to share strategies on grassroots mobilization.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png",
    type: "Upcoming"
  },
  {
    title: "Community Health Camp",
    date: "December 10, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Rural Clinic, District 4",
    desc: "A free medical camp providing pediatric and maternal care to over 500 families in the region. Volunteers needed.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=424,fit=crop/Aq2NJ23MzBH2rx2j/copy-of-brown-simple-happy-birthday-poster-Yg27zMJrD9tBN5zQ.png",
    type: "Volunteer"
  }
];

export default function EventsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen pt-32 pb-32 bg-background relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Movement.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover upcoming events, fundraisers, and volunteer opportunities. Be part of the change in person or online.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-64 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        <div className="space-y-24">
          {events.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2 flex flex-col"
                >
                  <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} text-left ${isEven ? 'md:text-left' : 'md:text-right'} p-8 bg-card rounded-[2rem] border border-border shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-6 inline-block">
                      {event.type}
                    </div>
                    
                    <h3 className="text-3xl font-space-grotesk font-bold mb-4">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className={`flex items-center gap-3 text-muted-foreground ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <Calendar size={18} className="text-primary shrink-0" />
                        <span className="font-medium">{event.date} • {event.time}</span>
                      </div>
                      <div className={`flex items-center gap-3 text-muted-foreground ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <MapPin size={18} className="text-primary shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {event.desc}
                    </p>

                    <Link href="/contact" className="inline-block mt-8">
                      <Button className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group">
                        RSVP Now
                        <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${isEven ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1 md:rotate-180 md:mr-2 md:ml-0'}`} />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
