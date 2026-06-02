import { GpsCommandSection } from "@/components/sections/gps-command";
import { ObstacleDetectionSection } from "@/components/sections/obstacle-detection";

export default function LiveMonitoringPage() {
  return (
    <div className="space-y-12 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Live Monitoring</h1>
        <p className="text-text-secondary">Real-time GPS tracking and spatial awareness.</p>
      </div>

      <div className="glass-panel overflow-hidden border-primary/20">
        <GpsCommandSection />
      </div>

      <div className="glass-panel overflow-hidden">
        <ObstacleDetectionSection />
      </div>
    </div>
  );
}
