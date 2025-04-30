import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MapFilters from "../components/MapFilters";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const { posts } = useContext(AppContext);

  return (
    <div>
      <div className="search-container">
        <SearchBar />
        <MapFilters />
      </div>
      <MapContainer
        center={[44.833328, -0.56667]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.833328, -0.56667]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {posts.map((item) => (
          <Marker
            key={item.id}
            position={[
              item.location.coordinates.latitude,
              item.location.coordinates.longitude,
            ]}
          >
            <Popup>
              {item.title} <br /> {item.content}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;
