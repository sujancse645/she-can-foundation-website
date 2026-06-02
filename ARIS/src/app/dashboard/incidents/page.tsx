import { IncidentResponseSection } from "@/components/sections/incident-response";
import { FallDetectionSection } from "@/components/sections/fall-detection";

export default function IncidentsPage() {
  return (
    <div className="space-y-12 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Incident Logs</h1>
        <p className="text-text-secondary">Review automated incident reports and fall detection events.</p>
      </div>

      <div className="glass-panel overflow-hidden border-danger/20">
        <IncidentResponseSection />
      </div>

      <div className="glass-panel overflow-hidden">
        <FallDetectionSection />
      </div>
    </div>
  );
}
