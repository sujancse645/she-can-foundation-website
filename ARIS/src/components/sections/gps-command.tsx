"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Crosshair, Map as MapIcon, History } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Dynamically import MapContainer to avoid SSR issues with Leaflet
const MapComponent = dynamic(
  () => import("@/components/map/MapComponent"),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center bg-surface/50 text-white">Initializing GPS Module...</div> }
);

export function GpsCommandSection() {
  const [coordinates, setCoordinates] = useState({ lat: 13.0827, lng: 80.2707 });

  useEffect(() => {
    // Simulate minor GPS drift for realism
    const interval = setInterval(() => {
      setCoordinates(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0002,
        lng: prev.lng + (Math.random() - 0.5) * 0.0002
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gps-command" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-primary font-semibold tracking-widest uppercase mb-2">NEO-6M Integration</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Global Command Center</h2>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-text-secondary hover:text-white hover:border-primary transition-colors">
              <MapIcon className="w-4 h-4" /> Live Tracking
            </button>
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-text-secondary hover:text-white hover:border-primary transition-colors">
              <History className="w-4 h-4" /> Route History
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 flex flex-col">
            <div className="glass-panel p-6 flex-1 border-primary/20">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <h4 className="font-bold text-white">Active Units</h4>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold">12 ONLINE</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: "W-742", name: "Sector 4 Team", status: "SAFE", lat: coordinates.lat, lng: coordinates.lng },
                  { id: "W-891", name: "Maintenance A", status: "SAFE", lat: 13.0850, lng: 80.2750 },
                  { id: "W-102", name: "Loading Dock", status: "WARNING", lat: 13.0810, lng: 80.2700 },
                ].map((unit, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-white">{unit.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        unit.status === 'SAFE' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                      }`}>{unit.status}</span>
                    </div>
                    <div className="text-xs text-text-secondary mb-2">{unit.name}</div>
                    <div className="flex gap-2 font-mono text-[10px] text-primary opacity-80">
                      <span>{unit.lat.toFixed(4)}</span>
                      <span>{unit.lng.toFixed(4)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 bg-surface">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-primary" /> Target Coordinates
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] text-text-secondary mb-1">LATITUDE</div>
                  <div className="font-mono text-white bg-background p-2 rounded border border-white/10">
                    {coordinates.lat.toFixed(6)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary mb-1">LONGITUDE</div>
                  <div className="font-mono text-white bg-background p-2 rounded border border-white/10">
                    {coordinates.lng.toFixed(6)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3 glass-panel overflow-hidden border-primary/20 relative">
            <div className="absolute top-4 left-4 z-10 glass px-3 py-2 flex items-center gap-3 rounded border-primary/30">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-mono text-white font-bold tracking-widest">SATELLITE LINK ACTIVE</span>
            </div>
            <MapComponent center={[coordinates.lat, coordinates.lng]} />
          </div>
        </div>
      </div>
    </section>
  );
}