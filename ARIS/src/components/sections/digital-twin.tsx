"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Cylinder, Wireframe } from "@react-three/drei";
import { motion } from "framer-motion";
import { Activity, MapPin, Shield, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

function AbstractWorker() {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Head */}
      <Sphere args={[0.4, 32, 32]} position={[0, 2.5, 0]}>
        <meshStandardMaterial color="#00D4FF" wireframe transparent opacity={0.8} />
      </Sphere>
      
      {/* Torso */}
      <Cylinder args={[0.5, 0.4, 1.5, 16]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#0A84FF" wireframe transparent opacity={0.8} />
      </Cylinder>

      {/* Arms */}
      <Cylinder args={[0.15, 0.15, 1.2, 16]} position={[-0.8, 1.2, 0]} rotation={[0, 0, Math.PI / 8]}>
        <meshStandardMaterial color="#30D158" wireframe transparent opacity={0.6} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 1.2, 16]} position={[0.8, 1.2, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <meshStandardMaterial color="#30D158" wireframe transparent opacity={0.6} />
      </Cylinder>

      {/* Legs */}
      <Cylinder args={[0.2, 0.15, 1.5, 16]} position={[-0.25, -0.3, 0]}>
        <meshStandardMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
      </Cylinder>
      <Cylinder args={[0.2, 0.15, 1.5, 16]} position={[0.25, -0.3, 0]}>
        <meshStandardMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
      </Cylinder>

      {/* Core Sensor Highlight */}
      <Sphere args={[0.2, 16, 16]} position={[0, 1.5, 0]}>
        <meshBasicMaterial color="#30D158" />
      </Sphere>
      <pointLight position={[0, 1.5, 0]} color="#30D158" intensity={2} distance={2} />
    </group>
  );
}

export function DigitalTwinSection() {
  const [activeNode, setActiveNode] = useState('health');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes = [
    { id: 'health', label: 'Health Status', icon: Activity, color: 'text-success', bg: 'bg-success/20', border: 'border-success', value: 'OPTIMAL' },
    { id: 'env', label: 'Environment', icon: Thermometer, color: 'text-warning', bg: 'bg-warning/20', border: 'border-warning', value: '35°C / 60%' },
    { id: 'loc', label: 'Location', icon: MapPin, color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary', value: 'SECTOR 4' },
    { id: 'shield', label: 'Armor/PPE', icon: Shield, color: 'text-secondary', bg: 'bg-secondary/20', border: 'border-secondary', value: 'VERIFIED' },
  ];

  return (
    <section id="digital-twin" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 h-[800px] flex flex-col">
        <div className="text-center mb-12">
          <h3 className="text-primary font-semibold tracking-widest uppercase mb-4">Industrial Metaverse</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Worker Digital Twin</h2>
        </div>

        <div className="flex-1 relative glass-panel overflow-hidden border-primary/20">
          
          {/* 3D Canvas */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <AbstractWorker />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>

          {/* UI Overlay */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between p-8 pointer-events-none">
            
            {/* Left Panel */}
            <div className="space-y-4 pointer-events-auto w-full md:w-64">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={cn("w-full text-left p-4 rounded-xl border transition-all duration-300 backdrop-blur-md", 
                    activeNode === node.id ? `bg-background/80 ${node.border}` : 'bg-background/40 border-white/10 hover:border-white/30'
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <node.icon className={cn("w-5 h-5", activeNode === node.id ? node.color : 'text-text-secondary')} />
                    <span className={cn("font-bold text-sm", activeNode === node.id ? 'text-white' : 'text-text-secondary')}>{node.label}</span>
                  </div>
                  <div className={cn("font-mono font-bold tracking-wider", activeNode === node.id ? node.color : 'text-white')}>
                    {node.value}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Panel - Data Stream */}
            <div className="hidden md:flex flex-col justify-end pointer-events-auto w-64">
              <div className="bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-[10px] text-text-secondary overflow-hidden h-48 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
                <motion.div 
                  animate={{ y: [-100, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="space-y-1 opacity-70"
                >
                  <DataStreamLogs />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function DataStreamLogs() {
  const [logs, setLogs] = useState<{ id: number; time: number; val: number }[]>([]);

  useEffect(() => {
    const generatedLogs = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      time: Date.now() - i * 1000,
      val: Math.floor(Math.random() * 1000)
    }));
    setLogs(generatedLogs);
  }, []);

  return (
    <>
      {logs.map((log) => (
        <div key={log.id}>
          <span className="text-primary">{`[${log.time}]`}</span> SYS_SYNC: OK VAL_{log.val}
        </div>
      ))}
    </>
  );
}