import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function Map({ radius }) {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  console.log("Radis: ", radius);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  // Fetch hospitals from Overpass API
  useEffect(() => {
    if (lat && lon) {
      const query = `
        [out:json];
        node
          ["amenity"="hospital"]
          (around:${radius},${lat},${lon});
        out;
      `;

      fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      })
        .then((res) => res.json())
        .then((data) => {
          const results = data.elements.map((el) => ({
            id: el.id,
            lat: el.lat,
            lon: el.lon,
            name: el.tags.name || "Unknown Hospital",
          }));
          setHospitals(results);
        })
        .catch((err) => console.error(err));
    }
  }, [lat, lon, radius]);

  if (!lat || !lon) return <p>Loading map...</p>;

  return (
    <MapContainer center={[lat, lon]} zoom={13} className="w-full h-[600px]">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User location */}
      <Marker position={[lat, lon]}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Hospital markers */}
      {hospitals.map((h) => (
        <Marker key={h.id} position={[h.lat, h.lon]}>
          <Popup>{h.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
