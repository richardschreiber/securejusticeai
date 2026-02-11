import { useRef, useState } from "react";
import { MapView } from "./Map";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { toast } from "sonner";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !mapRef.current) return;

    setIsSearching(true);
    const geocoder = new google.maps.Geocoder();

    try {
      const { results } = await geocoder.geocode({ address: searchQuery });
      
      if (results && results[0]) {
        const userLocation = results[0].geometry.location;
        
        // Find nearest pilot location
        let nearest = PILOT_LOCATIONS[0];
        let minDistance = Number.MAX_VALUE;

        PILOT_LOCATIONS.forEach(pilot => {
          const pilotLoc = new google.maps.LatLng(pilot.lat, pilot.lng);
          const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, pilotLoc);
          
          if (distance < minDistance) {
            minDistance = distance;
            nearest = pilot;
          }
        });

        // Update map view
        mapRef.current.setCenter(nearest);
        mapRef.current.setZoom(10);
        
        toast.success(`Nearest partner found: ${nearest.title}`);
      } else {
        toast.error("Location not found. Please try again.");
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      toast.error("Error finding location. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Find a Partner Near You
        </h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input 
            placeholder="Enter city, state, or zip code..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isSearching}>
            {isSearching ? (
              <span className="animate-spin mr-2">⏳</span>
            ) : (
              <Search className="h-4 w-4 mr-2" />
            )}
            Search
          </Button>
        </form>
      </div>

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
    </div>
  );
}
