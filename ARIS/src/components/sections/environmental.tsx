"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Thermometer, Droplets, AlertTriangle } from "lucide-react";

const data = [
  { time: '08:00', temp: 32, humidity: 45, heatIndex: 33 },
  { time: '10:00', temp: 34, humidity: 50, heatIndex: 36 },
  { time: '12:00', temp: 38, humidity: 55, heatIndex: 42 }, // High risk
  { time: '14:00', temp: 39, humidity: 52, heatIndex: 44 }, // Critical
  { time: '16:00', temp: 36, humidity: 48, heatIndex: 38 },
  { time: '18:00', temp: 33, humidity: 45, heatIndex: 34 },
];

const EnvCard = ({ title, value, unit, icon: Icon, status }: any) => (
  <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: status === 'critical' ? '#FF453A' : status === 'warning' ? '#FF9F0A' : '#30D158' }}>
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-xl bg-opacity-20`} style={{ backgroundColor: status === 'critical' ? 'rgba(255, 69, 58, 0.2)' : status === 'warning' ? 'rgba(255, 159, 10, 0.2)' : 'rgba(48, 209, 88, 0.2)' }}>
        <Icon className="w-6 h-6" style={{ color: status === 'critical' ? '#FF453A' : status === 'warning' ? '#FF9F0A' : '#30D158' }} />
      </div>
      <h5 className="text-text-secondary font-medium">{title}</h5>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-bold text-white font-mono">{value}</span>
      <span className="text-text-secondary">{unit}</span>
    </div>
  </div>
);

export function EnvironmentalSection() {
  return (
    <section id="environmental" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-warning font-semibold tracking-widest uppercase mb-4">DHT22 Integration</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Environmental Risk Monitoring</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <EnvCard title="Current Temperature" value="39.2" unit="°C" icon={Thermometer} status="critical" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <EnvCard title="Relative Humidity" value="52.4" unit="%" icon={Droplets} status="warning" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <EnvCard title="Heat Stress Index" value="44.1" unit="HI" icon={AlertTriangle} status="critical" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="glass-panel p-6"
          >
            <h4 className="text-xl font-bold text-white mb-6">Temperature Trends (Daily)</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF9F0A" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF9F0A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="#B8C0D4" />
                  <YAxis stroke="#B8C0D4" />
                  <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Area type="monotone" dataKey="temp" stroke="#FF9F0A" fillOpacity={1} fill="url(#colorTemp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="glass-panel p-6"
          >
            <h4 className="text-xl font-bold text-white mb-6">Heat Stress Risk Analysis</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="#B8C0D4" />
                  <YAxis stroke="#B8C0D4" />
                  <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Line type="monotone" dataKey="heatIndex" stroke="#FF453A" strokeWidth={3} dot={{ r: 6, fill: "#FF453A" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}