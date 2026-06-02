"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, Bell, BarChart3, Settings, ShieldCheck, LogOut, Menu, X, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Admin Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Live Monitoring', href: '/dashboard/live', icon: Map },
  { name: 'Incident Logs', href: '/dashboard/incidents', icon: Bell },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Workers', href: '/dashboard/workers', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-surface z-50">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <span className="text-xl font-black text-white tracking-tighter">ARIS</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-text-secondary">
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={cn("fixed md:static inset-y-0 left-0 z-40 w-64 bg-surface border-r border-white/10 transform transition-transform duration-300 flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="hidden md:flex p-6 items-center gap-2 border-b border-white/10">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <span className="text-2xl font-black text-white tracking-tighter">ARIS</span>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 px-2">Menu</div>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={() => setSidebarOpen(false)}
                className={cn("flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group font-medium",
                  isActive ? "bg-primary/10 text-primary" : "text-text-secondary hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-text-secondary group-hover:text-white")} />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-text-secondary hover:bg-danger/10 hover:text-danger transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-white/10 bg-surface/50 backdrop-blur-md hidden md:flex items-center justify-between px-8 z-30">
          <div className="flex items-center gap-4 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-text-secondary">SYSTEM: <span className="text-success font-bold">ONLINE</span></span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-text-secondary">ENV: <span className="text-primary font-bold">PRODUCTION</span></span>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-text-secondary hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-danger border-2 border-surface" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right hidden lg:block">
                <div className="text-sm font-bold text-white">System Admin</div>
                <div className="text-xs text-text-secondary">admin@aris.io</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background relative">
          {/* Background Ambient Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
