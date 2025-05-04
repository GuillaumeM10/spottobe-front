import React, { useContext, useState } from "react";
import NotificationIcon from "../assets/NotificationIcon";
import { Link } from "react-router-dom";
import MapFilters from "../components/MapFilters";
import { AppContext } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import FiltersIcon from "../assets/FiltersIcon";
import PostSwiper from "../components/PostSwiper";

const ParcourirPage = () => {
  const { posts, tags } = useContext(AppContext);
  const [pagePosts, setPagePosts] = useState(null);

  console.log(tags);

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

      <div className="flex">
        <SearchBar />
        <button className="filters-button">
          <FiltersIcon />
        </button>
      </div>

      <MapFilters
        setMapPosts={setPagePosts}
        mapPosts={posts}
        displayNames={true}
        namesPlace="under"
        generalTags={true}
      />

      <PostSwiper
        seeMoreText="Voir tout"
        seeMoreLink={`/recommandations`}
        posts={[posts[0], posts[8], posts[12], posts[3], posts[5]]}
        title="Recommandations"
        nbPosts={5}
      />

      <PostSwiper
        seeMoreText="Voir tout"
        seeMoreLink={`/populaires`}
        posts={[posts[3], posts[22], posts[4], posts[6], posts[10]]}
        title="Nouveauté"
        nbPosts={5}
      />

      <PostSwiper
        seeMoreText="Voir tout"
        seeMoreLink={`/populaires`}
        posts={[posts[0], posts[1], posts[2], posts[3], posts[4]]}
        title="Populaires"
        nbPosts={5}
      />

      {tags.map((tag) => {
        const tagPosts = posts.filter((post) => post.tags.includes(tag));
        tagPosts.forEach((post) => {
          if (post.tags[0] !== tag) {
            tagPosts.splice(tagPosts.indexOf(post), 1);
          }
        });
        return (
          <PostSwiper
            key={tag}
            seeMoreText="Voir tout"
            seeMoreLink={`/tags/${tag}`}
            posts={tagPosts}
            title={tag}
            nbPosts={5}
          />
        );
      })}
    </div>
  );
};

export default ParcourirPage;
