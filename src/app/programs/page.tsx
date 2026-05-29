"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Stethoscope, Briefcase, GraduationCap, Users, ShieldAlert, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const programs = [
  {
    title: "Girls' Education Initiative",
    desc: "Providing scholarships, school supplies, and safe transport to keep girls in school.",
    fullDesc: "Our Girls' Education Initiative breaks down the systemic barriers that prevent young women from accessing quality education. By funding scholarships, providing necessary school supplies, and organizing safe community transport, we ensure that girls can not only attend school but thrive in their studies. Education is the cornerstone of empowerment.",
    icon: GraduationCap,
    stats: "15k+ Enrolled",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-2-YD0rJbvp3nSz7Dvz.png",
  },
  {
    title: "Maternal Healthcare",
    desc: "Access to prenatal care and medical resources in rural areas.",
    fullDesc: "Maternal mortality remains a critical issue in marginalized communities. Our healthcare program establishes rural clinics staffed with trained medical professionals. We provide free prenatal care, nutritional supplements, and emergency obstetric services to ensure safe deliveries and healthy beginnings for both mothers and children.",
    icon: Stethoscope,
    stats: "30+ Clinics",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
  },
  {
    title: "Skill Dev & Microfinance",
    desc: "Vocational training and seed funding for women entrepreneurs.",
    fullDesc: "Financial independence changes everything. We provide extensive vocational training in trades ranging from sustainable agriculture to digital literacy. Graduates are given access to zero-interest micro-loans, allowing them to start their own businesses, support their families, and stimulate their local economies.",
    icon: Briefcase,
    stats: "5k+ Businesses",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg",
  },
  {
    title: "Literacy Camps",
    desc: "Adult literacy programs for mothers.",
    fullDesc: "It is never too late to learn. Our adult literacy camps focus on mothers who were denied educational opportunities in their youth. By teaching basic reading, writing, and financial literacy, we empower them to advocate for themselves, manage their households better, and actively participate in their children's education.",
    icon: BookOpen,
    stats: "10k+ Graduates",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png",
  },
  {
    title: "Community Leadership",
    desc: "Training women to take political and social leadership roles.",
    fullDesc: "Real change requires representation. We identify emerging female leaders in communities and provide them with leadership, advocacy, and public speaking training. By helping women secure seats on local councils and boards, we ensure their voices are heard in the decision-making processes that affect their lives.",
    icon: Users,
    stats: "500+ Leaders",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png",
  },
  {
    title: "Domestic Violence Support",
    desc: "Safe houses and legal aid for abuse survivors.",
    fullDesc: "Safety is a fundamental human right. Our foundation operates confidential safe houses providing immediate refuge for survivors of domestic violence. We pair this with free legal representation, psychological counseling, and job placement assistance to help survivors rebuild their lives free from abuse.",
    icon: ShieldAlert,
    stats: "24/7 Support",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=424,fit=crop/Aq2NJ23MzBH2rx2j/copy-of-brown-simple-happy-birthday-poster-Yg27zMJrD9tBN5zQ.png",
  }
];

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProgram]);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-2">Our Programs</h4>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 leading-tight">
            Initiatives that create <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">lasting impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We don't just provide temporary relief. Our programs are engineered to build systemic resilience and empower women to become architects of their own futures. Click any program to learn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              onClick={() => setSelectedProgram(program)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group cursor-pointer relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/10 aspect-[4/5]`}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={program.img} alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="flex justify-between items-start mb-auto">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-white/20 backdrop-blur-md text-white">
                    {program.stats}
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-2 text-white">
                    {program.title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-white/80">
                    {program.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent">
            <Link href="/donate" className="block px-10 py-4 bg-background rounded-full text-lg font-bold hover:bg-transparent hover:text-white transition-colors">
              Fund a Program Today
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal / Dialog */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Image Header */}
              <div className="relative h-64 w-full shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedProgram.img} alt={selectedProgram.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 h-10 w-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <selectedProgram.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-wider">
                        {selectedProgram.stats}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white">
                      {selectedProgram.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Program Overview</h4>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {selectedProgram.fullDesc}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border">
                  <Link href="/donate" className="w-full">
                    <button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full flex items-center justify-center gap-2 group">
                      Donate to this cause
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/volunteer" className="w-full">
                    <button className="w-full h-12 bg-transparent border border-border hover:bg-muted text-foreground font-semibold rounded-full transition-colors">
                      Become a Volunteer
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
