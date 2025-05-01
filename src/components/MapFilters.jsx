import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DateIcon from "../assets/tags/DateIcon";
import ConcertIcon from "../assets/tags/ConcertIcon";
import ConferenceIcon from "../assets/tags/ConferenceIcon";
import EntreAmisIcon from "../assets/tags/EntreAmisIcon";
import SportIcon from "../assets/tags/SportIcon";
import FestivalsIcon from "../assets/tags/FestivalsIcon";
import { useState } from "react";

const MapFilters = ({ mapPosts, setMapPosts }) => {
  const { tags } = useContext(AppContext);
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setMapPosts(mapPosts);
    } else {
      setActiveTag(tag);
      const filteredPosts = mapPosts.filter((post) => post.tags[0] === tag);
      setMapPosts(filteredPosts);
    }
  };

  return (
    <div className="mapFilters">
      {tags.map((tag, index) => {
        let tagClass = tag.toLowerCase().replace(/\s+/g, "-");
        tagClass = tagClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return (
          <button
            className={`tag tag-${tagClass} ${
              activeTag === tag ? "active" : ""
            }`}
            key={index}
            onClick={() => handleTagClick(tag)}
          >
            {tag === "Data" && <DateIcon />}
            {tag === "Conférences" && <ConferenceIcon />}
            {tag === "Entre amis" && <EntreAmisIcon />}
            {tag === "Sport" && <SportIcon />}
            {tag === "Concert" && <ConcertIcon />}
            {tag === "Festivals" && <FestivalsIcon />}
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default MapFilters;
