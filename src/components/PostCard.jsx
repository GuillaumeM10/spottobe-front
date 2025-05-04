import React from "react";
import MapPointerIcon from "../assets/MapPointerIcon";
import PointsIcon from "../assets/layout/PointsIcon";
import { dateFormatter } from "../services/generalFunctions";

const PostCard = (post) => {
  return (
    <div className="postCard" key={post.id}>
      <div className="card-cover-container">
        <img src={post.cover} alt="cover" className="cover" />
        <p className="card-points flex items-center border-[1px] border-[#F9B54C] rounded-[50px] px-2 py-1 w-fit">
          <b>+{post.points}</b> <PointsIcon />{" "}
        </p>
      </div>
      <p className="card-title">
        {post.title} <span className="price">{post.price}€</span>
      </p>
      <p className="card-date">
        {dateFormatter(post.date.start)} . 16:30-06:00h
      </p>
      <p className="card-location flex items-center gap-[6px]">
        <MapPointerIcon /> {post.location.name}
      </p>
    </div>
  );
};

export default PostCard;
