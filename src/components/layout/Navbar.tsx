"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Show, UserButton, useUser } from "@clerk/nextjs";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-space-grotesk font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            She Can.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Show when="signed-in">
            <Link href="/admin">
              <Button variant="ghost" className="font-medium">
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </Show>
          <Show when="signed-out">
            <Link href="/sign-in">
              <Button variant="ghost" className="font-medium">
                Login
              </Button>
            </Link>
          </Show>
          <Link href="/volunteer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Volunteer
            </Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg p-6 flex flex-col gap-6 lg:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      pathname === link.href ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">Donate Now</Button>
                </Link>
                <Link href="/volunteer" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Become Volunteer</Button>
                </Link>
                <Show when="signed-in">
                  <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
                  </Link>
                  <div className="py-2">
                    <UserButton />
                  </div>
                </Show>
                <Show when="signed-out">
                  <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">Login</Button>
                  </Link>
                </Show>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
