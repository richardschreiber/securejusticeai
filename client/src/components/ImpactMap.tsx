import { useRef, useState } from "react";
import { MapView } from "./Map";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { toast } from "sonner";

export function ImpactMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !mapRef.current) return;

    setIsSearching(true);
    const geocoder = new google.maps.Geocoder();
    const placesService = new google.maps.places.PlacesService(mapRef.current);

    try {
      // 1. Geocode the user's input location (City/Zip)
      const { results } = await geocoder.geocode({ address: searchQuery });
      
      if (results && results[0]) {
        const userLocation = results[0].geometry.location;
        
        // Center map on user location
        mapRef.current.setCenter(userLocation);
        mapRef.current.setZoom(12);

        // 2. Search for real "Legal Aid" organizations nearby
        const request = {
          location: userLocation,
          radius: 10000, // 10km radius
          keyword: "legal aid",
          type: "lawyer" // 'lawyer' is the closest category, filtered by keyword 'legal aid'
        };

        placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Clear existing markers (if we were tracking them, for now we just add new ones)
            
            let foundCount = 0;
            results.forEach((place) => {
              if (place.geometry && place.geometry.location) {
                new google.maps.marker.AdvancedMarkerElement({
                  map: mapRef.current,
                  position: place.geometry.location,
                  title: place.name,
                });
                foundCount++;
              }
            });
            
            toast.success(`Found ${foundCount} Legal Aid organizations near ${searchQuery}`);
          } else {
            toast.info(`No specific Legal Aid organizations found immediately near ${searchQuery}. Try a broader search.`);
          }
        });

      } else {
        toast.error("Location not found. Please try again.");
      }
    } catch (error) {
      console.error("Search error:", error);
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
          Find Legal Aid Near You
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
          <h4 className="font-bold text-sm mb-1">LEGAL AID LOCATOR</h4>
          <p className="text-xs text-muted-foreground">
            Search to find Legal Services Organizations (LSOs) in your area.
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
