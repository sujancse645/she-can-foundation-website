"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What does the She Can Foundation do?", a: "We empower women and girls in marginalized communities through education, healthcare, vocational training, and leadership programs. Our goal is to break the cycle of poverty and create lasting systemic change." },
      { q: "Where are you located?", a: "Our headquarters are based in India, but our programs and initiatives span across several developing regions globally where the need for maternal healthcare and girls' education is highest." },
      { q: "Is She Can Foundation a registered NGO?", a: "Yes, we are a fully registered Non-Governmental Organization under the Indian Society Act, 1860. All donations are tax-deductible to the full extent of the law." }
    ]
  },
  {
    category: "Donations & Funding",
    questions: [
      { q: "How much of my donation goes directly to the programs?", a: "We are proud to say that 100% of public donations go directly to funding our field programs. Our administrative and overhead costs are covered entirely by private donors and corporate sponsors." },
      { q: "Can I donate to a specific campaign?", a: "Absolutely! When you visit our Campaigns page, you can choose a specific initiative (e.g., Maternal Health Clinics or Micro-Enterprise Fund) and direct your donation to that specific cause." },
      { q: "Do you accept international donations?", a: "Yes, our payment gateway accepts all major international credit cards and currencies. You will receive a receipt for tax purposes immediately upon donation." }
    ]
  },
  {
    category: "Getting Involved",
    questions: [
      { q: "How can I volunteer my time?", a: "We are always looking for passionate volunteers! You can visit our Volunteer page to see current needs, or reach out via our Contact form. We offer both remote (digital advocacy, grant writing) and on-the-ground volunteer opportunities." },
      { q: "Can my company become a corporate sponsor?", a: "Yes. Corporate partnerships are vital to our mission. Please visit our Partners page or contact our Development team through the Contact page to discuss sponsorship tiers and impact." }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-40">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-space-grotesk font-bold mb-6">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span></h1>
          <p className="text-xl text-muted-foreground">
            Have a question about our mission, donations, or how you can help? Find the answers below.
          </p>
        </motion.div>

        <div className="space-y-16">
          {faqs.map((group, groupIndex) => (
            <div key={group.category}>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-space-grotesk font-bold mb-6 text-foreground/80 flex items-center gap-4"
              >
                {group.category}
                <div className="h-[1px] flex-1 bg-border" />
              </motion.h2>
              
              <div className="space-y-4">
                {group.questions.map((faq, qIndex) => {
                  const id = `${groupIndex}-${qIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <motion.div 
                      key={id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: qIndex * 0.1 }}
                      className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary/50 bg-primary/5' : 'border-border bg-card hover:border-primary/30'}`}
                    >
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                          {faq.q}
                        </span>
                        <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-lg"
        >
          <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-space-grotesk font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find the answer you're looking for? Please reach out to our team, and we'll get back to you as soon as possible.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg group">
              Contact Us
              <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
