import React, { useContext, useState } from "react";
import NotificationIcon from "../assets/NotificationIcon";
import { Link } from "react-router-dom";
import MapFilters from "../components/MapFilters";
import { AppContext } from "../context/AppContext";
import SearchBar from "../components/SearchBar";

const ParcourirPage = () => {
  const { posts } = useContext(AppContext);
  const [pagePosts, setPagePosts] = useState(null);

  return (
    <div className="parcourir-page">
      <div className="header-me">
        <div className="me flex items-center gap-[8px]">
          <img
            src="https://picsum.photos/720/720?random=1&cover"
            className="w-[46px] h-[46px] object-cover"
            alt=""
          />
          <p className="name text-[24px]">
            <b>Bonjour Laure !</b>
          </p>
          <Link to="/notifications" className="notification-icon ml-auto">
            <NotificationIcon />
          </Link>
        </div>
      </div>

      <SearchBar />

      <MapFilters
        setMapPosts={setPagePosts}
        mapPosts={posts}
        displayNames={true}
        namesPlace="under"
        generalTags={true}
      />
    </div>
  );
};

export default ParcourirPage;
