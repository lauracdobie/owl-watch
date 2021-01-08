import React, { useState } from 'react';
import { MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SightingMap = ({ owls }) => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 56.4906712, lng: -4.2026458 });
  const [zoom, setZoom] = useState(7);
  const owlMarkers = owls.map((owl, index) => {
    return (
      <Marker key={index} position={[owl.lat, owl.lng]}></Marker>
    )
  })
  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}
export default SightingMap;
