"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex-1 w-full pt-[80px]"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
