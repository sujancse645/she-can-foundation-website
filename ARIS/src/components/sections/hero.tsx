"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ShieldAlert, Activity, Users, MapPin } from "lucide-react";

function ParticleField() {
  const ref = useRef<any>(null);
  
  // Generate random points for a futuristic grid/particle effect
  const sphere = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00D4FF"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const MetricCard = ({ label, value, icon: Icon, delay }: { label: string; value: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="glass-card p-6 flex flex-col items-center justify-center gap-3 relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
    <h4 className="text-3xl font-bold text-white tracking-tight">{value}</h4>
    <p className="text-sm text-text-secondary uppercase tracking-wider font-semibold text-center">{label}</p>
  </motion.div>
);

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/50 to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-primary/30"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              System Online & Monitoring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary text-glow">ARIS</span>
            <br />
            <span className="text-4xl md:text-6xl font-bold text-text-secondary">
              Advanced Real-Time Industrial Safety
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mb-12 leading-relaxed"
          >
            A next-generation worker safety platform that combines real-time monitoring, intelligent incident detection, environmental awareness, and GPS-powered emergency response.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-24 w-full sm:w-auto"
          >
            <button className="px-8 py-4 bg-primary hover:bg-secondary text-background font-bold rounded-lg transition-all duration-300 neon-border hover:scale-105">
              Launch Dashboard
            </button>
            <button className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 border border-white/20 hover:border-primary/50">
              Watch Live Demo
            </button>
          </motion.div>

          {/* Live Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <MetricCard label="Workers Protected" value="2,451" icon={Users} delay={0.8} />
            <MetricCard label="Incidents Monitored" value="14,392" icon={ShieldAlert} delay={0.9} />
            <MetricCard label="Sensors Active" value="9,804" icon={Activity} delay={1.0} />
            <MetricCard label="Locations Tracked" value="42" icon={MapPin} delay={1.1} />
          </div>
        </div>
      </div>
    </section>
  );
}