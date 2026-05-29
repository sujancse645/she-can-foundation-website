"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Form Submitted Successfully", {
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast.error("Error submitting form", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Leave us a message.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Our Location</h4>
                    <p className="text-muted-foreground mt-1">123 Empowerment Blvd, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone Number</h4>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email Address</h4>
                    <p className="text-muted-foreground mt-1">hello@shecanfoundation.org</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl relative overflow-hidden group">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    {/* Note: In a real floating label setup, you'd use a custom floating label component. For simplicity, we use Shadcn standard here with premium styling */}
                    <Input
                      {...register("name")}
                      placeholder="Full Name"
                      className="bg-background/50 border-border h-12 focus:ring-primary/50"
                    />
                    {errors.name && <span className="text-sm text-destructive absolute -bottom-5">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2 relative">
                    <Input
                      {...register("email")}
                      placeholder="Email Address"
                      className="bg-background/50 border-border h-12 focus:ring-primary/50"
                    />
                    {errors.email && <span className="text-sm text-destructive absolute -bottom-5">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <Input
                      {...register("phone")}
                      placeholder="Phone Number (Optional)"
                      className="bg-background/50 border-border h-12 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <Input
                      {...register("subject")}
                      placeholder="Subject"
                      className="bg-background/50 border-border h-12 focus:ring-primary/50"
                    />
                    {errors.subject && <span className="text-sm text-destructive absolute -bottom-5">{errors.subject.message}</span>}
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <Textarea
                    {...register("message")}
                    placeholder="Your Message..."
                    className="bg-background/50 border-border min-h-[150px] resize-none focus:ring-primary/50"
                  />
                  {errors.message && <span className="text-sm text-destructive absolute -bottom-5">{errors.message.message}</span>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 mt-4 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-md group/btn"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
