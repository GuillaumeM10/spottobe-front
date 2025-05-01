import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import MapFilters from "../components/MapFilters";
import SearchBar from "../components/SearchBar";

import DateIcon from "../assets/tags/DateIcon";
import ConcertIcon from "../assets/tags/ConcertIcon";
import ConferenceIcon from "../assets/tags/ConferenceIcon";
import EntreAmisIcon from "../assets/tags/EntreAmisIcon";
import SportIcon from "../assets/tags/SportIcon";
import FestivalsIcon from "../assets/tags/FestivalsIcon";

import markerIcon from "../assets/images/marker.png";

import L from "leaflet";
import { renderToString } from "react-dom/server";
import { useState } from "react";
import MapPostContent from "../components/MapPostContent";

const HomePage = () => {
  const { posts } = useContext(AppContext);
  const [mapPosts, setMapPosts] = useState(posts);
  const [selectedPost, setSelectedPost] = useState(null);

  const getIconForTag = (tag) => {
    switch (tag) {
      case "Data":
        return renderToString(<DateIcon />);
      case "Concert":
        return renderToString(<ConcertIcon />);
      case "Conférences":
        return renderToString(<ConferenceIcon />);
      case "Entre amis":
        return renderToString(<EntreAmisIcon />);
      case "Sport":
        return renderToString(<SportIcon />);
      case "Festivals":
        return renderToString(<FestivalsIcon />);
      default:
        return null;
    }
  };

  const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [64, 64],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const createMarkerIcon = (tag) => {
    if (!tag) return defaultIcon;

    const svgString = getIconForTag(tag);
    if (!svgString) return new L.Icon.Default();
    let tagClass = tag.toLowerCase().replace(/\s+/g, "-");
    tagClass = tagClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return L.divIcon({
      html: svgString,
      className: `custom-marker tag-${tagClass}`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
  };

  const handleMarkerClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="search-container">
        <SearchBar setMapPosts={setMapPosts} mapPosts={posts} />
        <MapFilters setMapPosts={setMapPosts} mapPosts={posts} />
      </div>
      <MapContainer
        center={[44.833328, -0.56667]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.833328, -0.56667]} icon={defaultIcon}>
          <Popup>Ma position</Popup>
        </Marker>
        {mapPosts.map((item) => {
          const firstTag =
            item.tags && item.tags.length > 0 ? item.tags[0] : null;

          return (
            <Marker
              key={item.id}
              position={[
                item.location.coordinates.latitude,
                item.location.coordinates.longitude,
              ]}
              icon={createMarkerIcon(firstTag)}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(item);
                },
              }}
            />
          );
        })}
      </MapContainer>

      {selectedPost && (
        <MapPostContent post={selectedPost} setSelectedPost={setSelectedPost} />
      )}
    </div>
  );
};

export default HomePage;
