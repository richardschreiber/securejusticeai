import { useRef } from "react";
import { MapView } from "./Map";

const PILOT_LOCATIONS = [
  { lat: 40.7128, lng: -74.0060, title: "New York, NY - Legal Aid Society" },
  { lat: 41.8781, lng: -87.6298, title: "Chicago, IL - Legal Aid Chicago" },
  { lat: 37.7749, lng: -122.4194, title: "San Francisco, CA - Bay Area Legal Aid" },
  { lat: 33.7490, lng: -84.3880, title: "Atlanta, GA - Atlanta Legal Aid" },
  { lat: 30.2672, lng: -97.7431, title: "Austin, TX - Texas RioGrande Legal Aid" },
  { lat: 47.6062, lng: -122.3321, title: "Seattle, WA - Northwest Justice Project" },
  { lat: 38.9072, lng: -77.0369, title: "Washington, DC - Legal Aid DC" },
  { lat: 34.0522, lng: -118.2437, title: "Los Angeles, CA - LAFLA" },
  { lat: 25.7617, lng: -80.1918, title: "Miami, FL - Legal Services of Greater Miami" },
  { lat: 39.7392, lng: -104.9903, title: "Denver, CO - Colorado Legal Services" },
];

export function ImpactMap() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add markers for each pilot location
    PILOT_LOCATIONS.forEach((location) => {
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: location.lat, lng: location.lng },
        title: location.title,
      });
    });
  };

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-lg relative">
      <div className="absolute top-4 left-4 z-10 bg-card/90 backdrop-blur p-3 rounded-md border border-border shadow-sm max-w-xs">
        <h4 className="font-bold text-sm mb-1">NATIONWIDE PILOT NETWORK</h4>
        <p className="text-xs text-muted-foreground">
          Partnering with leading LSOs across 10 major metropolitan areas to validate impact at scale.
        </p>
      </div>
      <MapView
        initialCenter={{ lat: 39.8283, lng: -98.5795 }} // Center of USA
        initialZoom={4}
        onMapReady={handleMapReady}
        className="w-full h-full"
      />
    </div>
  );
}
