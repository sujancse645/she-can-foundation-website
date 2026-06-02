"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Download, Filter, Calendar } from "lucide-react";

const trendData = [
  { name: 'Mon', temp: 35, humidity: 65, incidents: 4 },
  { name: 'Tue', temp: 36, humidity: 60, incidents: 2 },
  { name: 'Wed', temp: 38, humidity: 55, incidents: 7 },
  { name: 'Thu', temp: 34, humidity: 70, incidents: 1 },
  { name: 'Fri', temp: 35, humidity: 62, incidents: 3 },
  { name: 'Sat', temp: 32, humidity: 58, incidents: 0 },
  { name: 'Sun', temp: 31, humidity: 55, incidents: 0 },
];

const incidentTypeData = [
  { name: 'Falls', value: 35 },
  { name: 'Proximity', value: 45 },
  { name: 'Heat Stress', value: 20 },
];

const COLORS = ['#FF453A', '#FF9F0A', '#30D158'];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-primary font-semibold tracking-widest uppercase mb-2">Executive Insights</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Analytics</h2>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-text-secondary hover:text-white hover:border-primary transition-colors">
              <Calendar className="w-4 h-4" /> This Week
            </button>
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-text-secondary hover:text-white hover:border-primary transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-lg hover:bg-secondary transition-colors">
              <Download className="w-4 h-4" /> Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Incident Trends */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6"
          >
            <h4 className="text-lg font-bold text-white mb-6">Incident Trends & Environmental Correlation</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#B8C0D4" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" stroke="#B8C0D4" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="#FF453A" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#FF9F0A" strokeWidth={2} dot={false} name="Avg Temp (°C)" />
                  <Line yAxisId="right" type="step" dataKey="incidents" stroke="#FF453A" strokeWidth={3} name="Incidents" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Incident Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6"
          >
            <h4 className="text-lg font-bold text-white mb-6">Incident Breakdown</h4>
            <div className="h-[200px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {incidentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: 'rgba(255,255,255,0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {incidentTypeData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-text-secondary text-sm">{entry.name}</span>
                  </div>
                  <span className="font-bold text-white font-mono">{entry.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}