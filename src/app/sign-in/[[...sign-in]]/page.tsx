import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1593113589914-07553c6c2999?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 w-full max-w-md mx-auto p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-white/10 shadow-2xl">
        <SignIn appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm normal-case",
            card: "bg-transparent shadow-none w-full",
            headerTitle: "text-2xl font-space-grotesk font-bold text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "border-border hover:bg-muted text-foreground",
            socialButtonsBlockButtonText: "font-semibold text-foreground",
            formFieldLabel: "text-foreground",
            formFieldInput: "bg-background/50 border-border text-foreground focus:ring-primary/50",
            footerActionLink: "text-primary hover:text-primary/90"
          }
        }} />
      </div>
    </div>
  );
}
