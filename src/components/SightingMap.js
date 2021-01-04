import { Component } from 'react';
import { MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class SightingMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentLocation: { lat: 56.4906712, lng: -4.2026458 },
        zoom: 7,
      }
    }
  
    render() {
      const { currentLocation, zoom } = this.state;
  
      return (
        <Map center={currentLocation} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
  
        </Map>
      );
    }
  }
  
  export default SightingMap;
