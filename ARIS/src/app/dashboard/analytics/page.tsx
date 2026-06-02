import { AnalyticsSection } from "@/components/sections/analytics";
import { AiIntelligenceSection } from "@/components/sections/ai-intelligence";

export default function AnalyticsPage() {
  return (
    <div className="space-y-12 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics & AI</h1>
        <p className="text-text-secondary">Historical trends, predictive insights, and machine learning intelligence.</p>
      </div>

      <div className="glass-panel overflow-hidden border-success/20">
        <AnalyticsSection />
      </div>

      <div className="glass-panel overflow-hidden">
        <AiIntelligenceSection />
      </div>
    </div>
  );
}
