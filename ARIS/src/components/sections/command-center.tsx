"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Thermometer, Droplets, Radar, User, MapPin, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const LiveCard = ({ title, value, unit, icon: Icon, status, trend }: any) => (
  <div className="glass-card p-6 flex flex-col justify-between h-full relative overflow-hidden">
    <div className={cn("absolute top-0 right-0 w-2 h-full", 
      status === 'normal' ? 'bg-success' : 
      status === 'warning' ? 'bg-warning' : 'bg-danger'
    )} />
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-white/5">
        <Icon className={cn("w-6 h-6", 
          status === 'normal' ? 'text-success' : 
          status === 'warning' ? 'text-warning' : 'text-danger'
        )} />
      </div>
      {trend && (
        <span className={cn("text-xs font-bold px-2 py-1 rounded-full",
          trend > 0 ? "bg-danger/20 text-danger" : "bg-success/20 text-success"
        )}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
    <div>
      <h5 className="text-text-secondary text-sm font-medium mb-1">{title}</h5>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white font-mono">{value}</span>
        <span className="text-text-secondary text-sm">{unit}</span>
      </div>
    </div>
  </div>
);

export function CommandCenterSection() {
  const [data, setData] = useState({
    temp: 35.2,
    humidity: 60.1,
    distance: 15,
    status: 'SAFE',
    lat: 13.0827,
    lng: 80.2707,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        temp: +(prev.temp + (Math.random() - 0.5) * 0.5).toFixed(1),
        humidity: +(prev.humidity + (Math.random() - 0.5) * 1).toFixed(1),
        distance: Math.max(0, Math.floor(prev.distance + (Math.random() - 0.5) * 5)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="command-center" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-primary font-semibold tracking-widest uppercase mb-2">Live Command Center</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Real-Time Telemetry</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border-success/30">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-mono text-success">LIVE STREAM ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <LiveCard 
              title="Temperature (DHT22)" 
              value={data.temp} 
              unit="°C" 
              icon={Thermometer} 
              status={data.temp > 38 ? 'warning' : 'normal'}
              trend={+1.2}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <LiveCard 
              title="Humidity (DHT22)" 
              value={data.humidity} 
              unit="%" 
              icon={Droplets} 
              status={data.humidity > 75 ? 'warning' : 'normal'}
              trend={-0.5}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <LiveCard 
              title="Obstacle Distance" 
              value={data.distance} 
              unit="cm" 
              icon={Radar} 
              status={data.distance < 20 ? 'danger' : data.distance < 50 ? 'warning' : 'normal'}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="glass-card p-6 h-full flex items-center gap-6">
              <div className="p-4 rounded-full bg-success/20 border border-success/50">
                <User className="w-8 h-8 text-success" />
              </div>
              <div>
                <h5 className="text-text-secondary text-sm font-medium mb-1">Worker Status</h5>
                <div className="text-2xl font-bold text-success tracking-widest">{data.status}</div>
              </div>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div className="glass-card p-6 h-full flex flex-col md:flex-row items-center justify-between gap-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-text-secondary text-sm font-medium mb-1">Live GPS Coordinates</h5>
                  <div className="flex gap-4 font-mono text-xl text-white">
                    <span>LAT: {data.lat.toFixed(4)}</span>
                    <span>LNG: {data.lng.toFixed(4)}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-secondary mb-1">Last Update</div>
                <div className="font-mono text-sm text-primary">Just now</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}