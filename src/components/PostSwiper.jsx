import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import PostCard from "./PostCard";

const PostSwiper = ({ seeMoreText, seeMoreLink, posts, title, nbPosts }) => {
  nbPosts = nbPosts || 3;

  return (
    <div className="overflow-x-hidden postSwiper">
      <div className="see-also mb-7">
        <div className="flex justify-between items-center mb-[18px] mt-[25px] px-[16px]">
          <h2 className="text-[24px] font-bold">
            {title || "Dans le même style"}
          </h2>
          <Link to={seeMoreLink || "/events"} className="underline text-[16px]">
            {seeMoreText || "Voir tout"}
          </Link>
        </div>
        <Swiper spaceBetween={16} slidesPerView={1.3}>
          {posts.map((post, key) => {
            if (key > nbPosts) return;

            return (
              <SwiperSlide key={post.id}>
                <PostCard {...post} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PostSwiper;
