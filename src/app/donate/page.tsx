"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Heart, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const donateSchema = z.object({
  donorName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  amount: z.string().min(1, "Amount is required"),
});

type DonateFormValues = z.infer<typeof donateSchema>;

const PRESET_AMOUNTS = [
  { value: "100", impact: "Provides school supplies for one child" },
  { value: "500", impact: "Funds a skills workshop for 5 women" },
  { value: "1000", impact: "Supports a rural family for a month" },
  { value: "5000", impact: "Sponsors a community health camp" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<string>("500");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1); // 1 = Details, 2 = Payment processing, 3 = Success

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<DonateFormValues>({
    resolver: zodResolver(donateSchema),
    defaultValues: { amount: "500" },
  });

  const handleAmountSelect = (val: string) => {
    setSelectedAmount(val);
    setValue("amount", val);
  };

  const onSubmit = async (data: DonateFormValues) => {
    setIsSubmitting(true);
    setPaymentStep(2); // Show simulated payment processing

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ donorName: data.donorName, amount: data.amount }),
      });

      if (!response.ok) throw new Error("Donation failed");

      // Simulate payment delay for effect
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setPaymentStep(3);
      toast.success("Thank you for your donation!");
    } catch (error) {
      toast.error("Donation failed. Please try again.");
      setPaymentStep(1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1593113589914-07553c6c2999?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Make an Impact Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your contribution directly empowers women and educates children in communities that need it most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Donation Progress & Impact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Current Campaign: Rural Education</h3>
              <Progress value={65} className="h-3 mb-4 bg-secondary/20" />
              <div className="flex justify-between text-sm font-medium mb-6">
                <span className="text-primary">₹6,500,000 Raised</span>
                <span className="text-muted-foreground">Goal: ₹10,000,000</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">How your money helps:</h4>
                <ul className="space-y-3">
                  {PRESET_AMOUNTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        <strong className="text-foreground">₹{item.value}</strong> - {item.impact}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex gap-4">
              <Heart className="h-8 w-8 text-secondary shrink-0" />
              <p className="text-sm text-foreground">
                She Can Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent of the law.
              </p>
            </div>
          </motion.div>

          {/* Donation Form (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-8 rounded-3xl bg-background/60 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              {paymentStep === 1 && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Frequency Toggle */}
                  <div className="flex p-1 bg-muted rounded-full">
                    <button
                      type="button"
                      onClick={() => setIsMonthly(false)}
                      className={`flex-1 py-3 text-sm font-semibold rounded-full transition-all ${
                        !isMonthly ? "bg-background shadow-md text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Give Once
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMonthly(true)}
                      className={`flex-1 py-3 text-sm font-semibold rounded-full transition-all ${
                        isMonthly ? "bg-background shadow-md text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amount Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PRESET_AMOUNTS.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => handleAmountSelect(item.value)}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${
                          selectedAmount === item.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 text-foreground"
                        }`}
                      >
                        ₹{item.value}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Input 
                        {...register("amount")} 
                        placeholder="Custom Amount" 
                        type="number"
                        className="h-12 text-lg font-bold"
                        onChange={(e) => setSelectedAmount(e.target.value)}
                      />
                      {errors.amount && <span className="text-sm text-destructive">{errors.amount.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input {...register("donorName")} placeholder="Full Name" className="h-12" />
                        {errors.donorName && <span className="text-sm text-destructive">{errors.donorName.message}</span>}
                      </div>
                      <div className="space-y-2">
                        <Input {...register("email")} placeholder="Email Address" className="h-12" />
                        {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary group"
                  >
                    Donate ₹{selectedAmount || "0"} {isMonthly && "Monthly"}
                    <CreditCard className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </form>
              )}

              {paymentStep === 2 && (
                <div className="py-20 flex flex-col items-center justify-center space-y-6">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                  <h3 className="text-2xl font-semibold">Processing Payment...</h3>
                  <p className="text-muted-foreground text-center">Please do not close this window while we securely process your donation.</p>
                </div>
              )}

              {paymentStep === 3 && (
                <div className="py-16 flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-green-500 fill-green-500 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Thank You!</h3>
                  <p className="text-lg text-muted-foreground">
                    Your generous donation of ₹{selectedAmount} has been received successfully. A receipt has been sent to your email.
                  </p>
                  <Button onClick={() => setPaymentStep(1)} variant="outline" className="mt-4">
                    Make Another Donation
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
