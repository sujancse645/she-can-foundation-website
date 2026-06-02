"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Webhook, Wifi, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export function RealTimeIntegrationSection() {
  const [activeTab, setActiveTab] = useState('rest');
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimestamp(Date.now());
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      setFlash(true);
      setTimeout(() => setFlash(false), 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="real-time-integration" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Developer APIs</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real-Time Data Integration</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              ARIS is built for developers and enterprise IT. Seamlessly integrate worker safety telemetry into your existing ERP or management systems using our robust API ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { id: 'rest', label: 'REST API', icon: Code2 },
                { id: 'ws', label: 'WebSocket', icon: Webhook },
                { id: 'mqtt', label: 'MQTT', icon: Wifi },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn("flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300", 
                    activeTab === tab.id ? 'bg-primary/10 border-primary text-primary' : 'bg-background/50 border-white/10 text-text-secondary hover:border-white/30'
                  )}
                >
                  <tab.icon className="w-6 h-6 mb-2" />
                  <span className="font-bold text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <Server className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Endpoint:</span>
                <code className="bg-background px-3 py-1 rounded text-primary font-mono font-bold">
                  {activeTab === 'mqtt' ? 'mqtt://broker.aris.io/telemetry' : activeTab === 'ws' ? 'wss://api.aris.io/v1/stream' : 'POST https://api.aris.io/v1/sensors'}
                </code>
              </div>
              <p className="text-sm text-text-secondary">
                {activeTab === 'rest' && 'Standard HTTP POST requests for batch updates or low-frequency monitoring.'}
                {activeTab === 'ws' && 'Persistent bi-directional connection for zero-latency dashboard updates without polling.'}
                {activeTab === 'mqtt' && 'Lightweight IoT messaging protocol ideal for ESP32 and edge devices in low-bandwidth environments.'}
              </p>
            </div>
          </div>

          {/* Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel border-white/10 overflow-hidden shadow-2xl relative"
          >
            {/* Window Header */}
            <div className="bg-background/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <div className="text-xs font-mono text-text-secondary flex items-center gap-2">
                <span className={cn("w-2 h-2 rounded-full transition-colors duration-200", flash ? "bg-success shadow-[0_0_10px_#30D158]" : "bg-success/20")} />
                Receiving Payload
              </div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 bg-[#0d1117] overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-[#c9d1d9]">
                  <span className="text-[#ff7b72]">{`{`}</span>{`\n`}
                  {`  `}
                  <span className="text-[#79c0ff]">"device_id"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#a5d6ff]">"W-742"</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`  `}
                  <span className="text-[#79c0ff]">"timestamp"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <motion.span 
                    animate={flash ? { color: '#30D158' } : { color: '#79c0ff' }}
                    className="transition-colors"
                  >
                    {mounted ? timestamp : '...'}
                  </motion.span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`  `}
                  <span className="text-[#79c0ff]">"sensors"</span>
                  <span className="text-[#ff7b72]">: {`{`}</span>{`\n`}
                  {`    `}
                  <span className="text-[#79c0ff]">"temperature"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#79c0ff]">35.2</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`    `}
                  <span className="text-[#79c0ff]">"humidity"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#79c0ff]">60.1</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`    `}
                  <span className="text-[#79c0ff]">"distance"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#79c0ff]">15.0</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`    `}
                  <span className="text-[#79c0ff]">"fall_status"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#ff7b72]">false</span>{`\n`}
                  {`  `}
                  <span className="text-[#ff7b72]">{`}`}</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  
                  {`  `}
                  <span className="text-[#79c0ff]">"gps"</span>
                  <span className="text-[#ff7b72]">: {`{`}</span>{`\n`}
                  {`    `}
                  <span className="text-[#79c0ff]">"lat"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#79c0ff]">13.0827</span>
                  <span className="text-[#c9d1d9]">,</span>{`\n`}
                  {`    `}
                  <span className="text-[#79c0ff]">"lng"</span>
                  <span className="text-[#ff7b72]">: </span>
                  <span className="text-[#79c0ff]">80.2707</span>{`\n`}
                  {`  `}
                  <span className="text-[#ff7b72]">{`}`}</span>{`\n`}
                  <span className="text-[#ff7b72]">{`}`}</span>
                </code>
              </pre>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}