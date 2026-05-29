"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  skills: z.string().min(2, "Please specify your skills"),
  availability: z.string().min(1, "Please select availability"),
  message: z.string().optional(),
});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate Cloudinary upload delay
      if (resumeFile) {
        await new Promise(res => setTimeout(res, 1000));
        toast.info("Resume uploaded successfully");
      }

      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, resume: resumeFile ? "uploaded_url_placeholder" : null }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Application Submitted!", {
        description: "Welcome to our volunteer network. We'll be in touch soon.",
      });
      reset();
      setResumeFile(null);
    } catch (error) {
      toast.error("Error submitting application");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Join Our Volunteer Network
          </h1>
          <p className="text-lg text-muted-foreground">
            Your skills can change lives. Sign up below to help us create a better world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl relative"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input {...register("name")} placeholder="Full Name" className="h-12" />
                {errors.name && <span className="text-sm text-destructive">{errors.name.message}</span>}
              </div>
              <div className="space-y-2">
                <Input {...register("email")} placeholder="Email Address" className="h-12" />
                {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input {...register("phone")} placeholder="Phone Number" className="h-12" />
              </div>
              <div className="space-y-2">
                <Select onValueChange={(val: any) => setValue("availability", val as string)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                    <SelectItem value="full-time">Full-time Volunteer</SelectItem>
                  </SelectContent>
                </Select>
                {errors.availability && <span className="text-sm text-destructive">{errors.availability.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <Input {...register("skills")} placeholder="Core Skills (e.g. Teaching, Medical, Logistics, Web Dev)" className="h-12" />
              {errors.skills && <span className="text-sm text-destructive">{errors.skills.message}</span>}
            </div>

            <div className="space-y-2">
              <Textarea {...register("message")} placeholder="Why do you want to volunteer with us?" className="min-h-[120px]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Upload Resume (Optional)</label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-4">Drag & drop your resume or click to browse</p>
                <Input 
                  type="file" 
                  className="hidden" 
                  id="resume-upload" 
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files?.[0]) setResumeFile(e.target.files[0]);
                  }}
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("resume-upload")?.click()}>
                  Select File
                </Button>
                {resumeFile && <p className="text-sm text-primary mt-2">{resumeFile.name}</p>}
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary group">
              {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : (
                <>Submit Application <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
