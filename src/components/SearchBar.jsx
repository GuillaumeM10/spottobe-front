import React from "react";
import LoopIcon from "../assets/LoopIcon";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { posts } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <div className="searchBar">
      <button className="search-button">
        <LoopIcon className="search-icon" />
      </button>

      <input
        type="text"
        placeholder="Rechercher des évènements"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setFilteredPosts(posts)}
        onBlur={() => setFilteredPosts(posts)}
      />
      <div className="resuts"></div>
    </div>
  );
};

export default SearchBar;
