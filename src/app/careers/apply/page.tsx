"use client";

import { motion } from "framer-motion";
import { Send, Briefcase, Paperclip, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-card border border-border p-8 rounded-3xl text-center shadow-2xl"
        >
          <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-space-grotesk font-bold mb-4">Application Received!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for applying. Our hiring team will review your application and get back to you within 5-7 business days.
          </p>
          <Link href="/careers">
            <Button className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
              Back to Careers
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">Job Application</h1>
          <p className="text-lg text-muted-foreground">
            Take the first step towards a rewarding career with She Can Foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">First Name</label>
                <input required type="text" className="w-full h-12 bg-background border border-input rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Last Name</label>
                <input required type="text" className="w-full h-12 bg-background border border-input rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email Address</label>
              <input required type="email" className="w-full h-12 bg-background border border-input rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Phone Number</label>
              <input required type="tel" className="w-full h-12 bg-background border border-input rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Position Applying For</label>
              <select required className="w-full h-12 bg-background border border-input rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground">
                <option value="" disabled selected>Select a role...</option>
                <option value="Program Director">Program Director - Women's Health</option>
                <option value="Outreach Lead">Community Outreach Lead</option>
                <option value="Grants Manager">Grants & Partnerships Manager</option>
                <option value="Volunteer Coordinator">Volunteer Coordinator</option>
                <option value="Other">Other / General Application</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Why do you want to join us?</label>
              <textarea required className="w-full h-32 bg-background border border-input rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your passion for our mission..." />
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-sm font-semibold text-foreground">Upload Resume / CV</label>
              <div className="border-2 border-dashed border-input rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer group">
                <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Paperclip className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                "Submitting Application..."
              ) : (
                <>Submit Application <Send className="h-5 w-5" /></>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
