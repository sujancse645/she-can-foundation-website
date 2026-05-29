import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated Rings */}
        <div className="relative flex items-center justify-center h-24 w-24">
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-secondary animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-accent animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <Loader2 className="h-6 w-6 text-primary animate-spin" />
        </div>
        
        <h2 className="text-xl font-space-grotesk font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
          She Can.
        </h2>
        <p className="text-sm text-muted-foreground animate-pulse delay-150">Empowering Futures</p>
      </div>
    </div>
  );
}
