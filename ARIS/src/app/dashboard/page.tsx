import { CommandCenterSection } from "@/components/sections/command-center";
import { EnvironmentalSection } from "@/components/sections/environmental";

export default function AdminDashboardOverview() {
  return (
    <div className="space-y-12 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Overview</h1>
        <p className="text-text-secondary">System telemetry and active fleet status.</p>
      </div>

      <div className="glass-panel overflow-hidden border-primary/20">
        <CommandCenterSection />
      </div>

      <div className="glass-panel overflow-hidden">
        <EnvironmentalSection />
      </div>
    </div>
  );
}
