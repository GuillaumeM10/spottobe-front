import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import DateIcon from "../assets/tags/DateIcon";
import ConcertIcon from "../assets/tags/ConcertIcon";
import ConferenceIcon from "../assets/tags/ConferenceIcon";
import EntreAmisIcon from "../assets/tags/EntreAmisIcon";
import SportIcon from "../assets/tags/SportIcon";
import FestivalsIcon from "../assets/tags/FestivalsIcon";

const MapFilters = ({ mapPosts, setMapPosts }) => {
  const { tags } = useContext(AppContext);
  const [activeTag, setActiveTag] = useState(null);
  const filtersRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mouseDownPosition, setMouseDownPosition] = useState(null);
  const dragThreshold = 5;

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

  const handleMouseDown = (e) => {
    if (!filtersRef.current) return;

    setMouseDownPosition({ x: e.pageX, y: e.pageY });
    setIsDragging(false);
    setStartX(e.pageX - filtersRef.current.offsetLeft);
    setScrollLeft(filtersRef.current.scrollLeft);
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsDragging(false);
    if (filtersRef.current) {
      filtersRef.current.style.cursor = "grab";
    }
    setMouseDownPosition(null);
  };

  const handleMouseMove = (e) => {
    if (!mouseDownPosition || !filtersRef.current) return;

    const moveX = Math.abs(e.pageX - mouseDownPosition.x);
    const moveY = Math.abs(e.pageY - mouseDownPosition.y);

    if (moveX > dragThreshold || moveY > dragThreshold) {
      setIsDragging(true);
      filtersRef.current.style.cursor = "grabbing";

      const x = e.pageX - filtersRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      filtersRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleTagButtonClick = (e, tag) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    handleTagClick(tag);
  };

  return (
    <div
      className={`mapFilters ${isDragging ? "dragging" : ""}`}
      ref={filtersRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isDragging && setIsDragging(false)}
    >
      {tags.map((tag, index) => {
        let tagClass = tag.toLowerCase().replace(/\s+/g, "-");
        tagClass = tagClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return (
          <button
            className={`tag tag-${tagClass} ${
              activeTag === tag ? "active" : ""
            }`}
            key={index}
            onClick={(e) => handleTagButtonClick(e, tag)}
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
