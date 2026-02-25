"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

// Import CSS Leaflet
import 'leaflet/dist/leaflet.css';

/**
 * FIX: Leaflet default icon issue.
 * Kita hapus modifikasi prototype global dan gunakan cara yang lebih aman.
 */
const iconDefault = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

/**
 * Komponen Helper untuk menggerakkan peta (FlyTo)
 */
function ChangeView({ center }: { center: LatLngExpression }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, 10, {
                duration: 1.5,
                animate: true
            });
        }
    }, [center, map]);
    return null;
}

interface Node {
    id: number;
    nama: string;
    posisi: [number, number];
    info: string;
}

interface RealMapProps {
    nodes: Node[];
    focusLocation?: [number, number];
}

const RealMap = ({ nodes, focusLocation }: RealMapProps) => {
    // Safety check untuk memastikan kita di Browser
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Koordinat pusat default (tengah Indonesia)
    const defaultCenter: LatLngExpression = [-2.5489, 118.0149];

    if (!isMounted) return <div className="w-full h-full bg-slate-900/10 animate-pulse" />;

    return (
        <div className="w-full h-full relative" style={{ minHeight: '400px' }}>
            <MapContainer
                center={defaultCenter}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                // Penting: react-leaflet terkadang butuh id unik jika container berganti
                id="main-leaflet-map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Komponen untuk animasi pindah lokasi */}
                {focusLocation && <ChangeView center={focusLocation} />}

                {/* Render Marker berdasarkan data yang diterima dari props */}
                {nodes.map((item) => (
                    <Marker
                        key={`${item.id}-${item.nama}`}
                        position={item.posisi as LatLngExpression}
                        icon={iconDefault}
                    >
                        <Popup>
                            <div className="p-1 min-w-[120px]">
                                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-1">
                                    {item.nama}
                                </h3>
                                <p className="text-xs text-slate-600">
                                    {item.info}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default RealMap;
