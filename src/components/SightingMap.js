import React, { useState } from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import Sighting from "./Sighting";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Owl from "../assets/Owl.svg";

const SightingMap = ({ owls }) => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 56.4906712, lng: -4.2026458 });
  const [zoom, setZoom] = useState(7);
  const markerIcon = L.icon ({
    // Owl image
    iconUrl: Owl,
    iconSize: [35, 35] 
  });

  const owlMarkers = owls.map((owl, index) => {
    return (
      <Marker key={index} position={[owl.lat, owl.lng]} icon={markerIcon} >
        <Popup>
          <Sighting
            name={owl.comName}
            sciName={owl.sciName}
            location={owl.locName}
            date={owl.obsDt}
            number={owl.howMany}
            key={owl.subId}
          />
        </Popup>
      </Marker>
    )
  })

  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {owlMarkers}
    </Map>
  );
}

export default SightingMap;
