"use client";

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Activity } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';

// Custom Map Marker using Lucide Icon
const createCustomIcon = (color: string) => {
  const iconHtml = ReactDOMServer.renderToString(
    <div className={`p-2 rounded-full border-2 bg-background/90 backdrop-blur-md`} style={{ borderColor: color, boxShadow: `0 0 15px ${color}` }}>
      <Activity size={20} color={color} />
    </div>
  );
  
  return L.divIcon({
    html: iconHtml,
    className: 'custom-leaflet-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

export default function MapComponent({ center }: { center: [number, number] }) {
  // Use a dark styled tile layer (CartoDB Dark Matter) to match the dark theme
  const tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <div className="w-full h-full z-0 relative">
      <MapContainer 
        center={center} 
        zoom={16} 
        style={{ height: "100%", width: "100%", background: '#050816' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url={tileUrl}
        />
        <Marker position={center} icon={createCustomIcon('#30D158')}>
          <Popup className="custom-popup">
            <div className="bg-surface p-2 text-white font-mono rounded">
              <strong>Unit W-742</strong><br/>
              Status: SAFE<br/>
              Loc: {center[0].toFixed(4)}, {center[1].toFixed(4)}
            </div>
          </Popup>
        </Marker>
        <MapUpdater center={center} />
      </MapContainer>
      
      <style jsx global>{`
        .custom-leaflet-icon {
          background: transparent;
          border: none;
        }
        .leaflet-popup-content-wrapper {
          background: #0B1020;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .leaflet-popup-tip {
          background: #0B1020;
        }
      `}</style>
    </div>
  );
}
