import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DateIcon from "../assets/tags/DateIcon";
import ConcertIcon from "../assets/tags/ConcertIcon";
import ConferenceIcon from "../assets/tags/ConferenceIcon";
import EntreAmisIcon from "../assets/tags/EntreAmisIcon";
import SportIcon from "../assets/tags/SportIcon";
import FestivalsIcon from "../assets/tags/FestivalsIcon";

const MapFilters = () => {
  const { tags } = useContext(AppContext);

  return (
    <div className="mapFilters">
      {tags.map((tag, index) => (
        <button key={index} className="tag">
          {tag === "Data" && <DateIcon />}
          {tag === "Conférences" && <ConferenceIcon />}
          {tag === "Entre amis" && <EntreAmisIcon />}
          {tag === "Sport" && <SportIcon />}
          {tag === "Concert" && <ConcertIcon />}
          {tag === "Festivals" && <FestivalsIcon />}
          {tag}
        </button>
      ))}
    </div>
  );
};

export default MapFilters;
