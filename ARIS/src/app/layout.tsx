import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ARIS | Advanced Real-Time Industrial Safety",
  description: "A next-generation worker safety platform that combines real-time monitoring, intelligent incident detection, environmental awareness, and GPS-powered emergency response.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
