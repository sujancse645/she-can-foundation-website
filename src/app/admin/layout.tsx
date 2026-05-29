"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Mail, Heart, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Contacts", href: "/admin/contacts", icon: Mail },
  { name: "Volunteers", href: "/admin/volunteers", icon: Users },
  { name: "Donations", href: "/admin/donations", icon: Heart },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-muted/20 overflow-hidden pt-[80px]">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        } flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/admin">
            <h2 className={`font-space-grotesk font-bold text-xl text-primary ${!sidebarOpen && "lg:hidden"}`}>
              Admin Panel
            </h2>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === link.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <link.icon size={20} className="shrink-0" />
              <span className={`${!sidebarOpen && "lg:hidden"}`}>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border flex items-center gap-4">
          <UserButton />
          <div className={`${!sidebarOpen && "lg:hidden"} flex flex-col`}>
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">admin@shecan.org</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <UserButton />
        </header>
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
