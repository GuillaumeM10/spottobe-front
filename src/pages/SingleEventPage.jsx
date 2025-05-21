import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PointsIcon from "../assets/layout/PointsIcon";
import CalandarIcon from "../assets/CalandarIcon";
import MapPointerIcon from "../assets/MapPointerIcon";
import TicketIcon from "../assets/TicketIcon";
import { useState } from "react";
import PostSwiper from "../components/PostSwiper";
import {
  addToCalandar,
  dateFormatter,
  formatTag,
  seeOnMaps,
} from "../services/generalFunctions";

const SingleEventPage = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));
  const navigate = useNavigate();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  let tagClass = formatTag(post.tags[0]);

  useEffect(() => {
    if (!post) {
      navigate("/");
      return;
    }
  }, [id, post, navigate]);

  if (!post) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="singleEventPage">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination
      >
        <SwiperSlide>
          <img src={post.cover} alt="cover" className="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/1280/720?random=5&cover"
            alt="cover"
            className="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/1280/720?random=9&cover"
            alt="cover"
            className="cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="content">
        <h1 className="title">Single Event {id}</h1>

        <div className="tags flex items-center gap-[6px]">
          <p className={`tag tag-${tagClass}`}>
            <span className="circle"></span> {post.tags[0]}
          </p>
          <p className="points flex items-center border-[1px] border-[#F9B54C] rounded-[50px] px-2 py-1 w-fit">
            +{post.points} <PointsIcon />{" "}
          </p>
        </div>

        <div className="px-[20px] mt-6 mb-8">
          <div className="participants flex items-center">
            <div className="pps flex">
              <img src="https://picsum.photos/720/720?random=18&cover" alt="" />
              <img src="https://picsum.photos/720/720?random=19&cover" alt="" />
            </div>
            <p>2 amis et 20 000 autres participent</p>
          </div>

          <div className="author">
            <img src={post.author.pp} alt="Avatar" className="avatar" />
            <div>
              <p className="name">{post.author.name}</p>
              <p className="description">Organisateur</p>
            </div>
          </div>

          <div className="desc-container">
            <p className="event-desc">
              {post.content} {post.content} {post.content}{" "}
              <input type="checkbox" hidden id="read-more" />
            </p>
            <label htmlFor="read-more" className="read-more">
              <b>
                <span className="plus">Plus</span>
                <span className="moin">Moins</span>
              </b>
            </label>
          </div>

          <div className="details">
            <CalandarIcon />

            <div>
              <p className="date">
                <b>
                  {dateFormatter(post.date.start)} -{" "}
                  {dateFormatter(post.date.end)}
                </b>
              </p>
              <p className="hours">15h30-22h00</p>

              <button className="btn" onClick={() => addToCalandar(post.date)}>
                <CalandarIcon /> Ajouter à mon agenda
              </button>
            </div>
          </div>

          <div className="details">
            <MapPointerIcon />

            <div>
              <p className="location-name">
                <b>{post.location.name}</b>
              </p>
              <p className="location-adress">{post.location.address}</p>

              <button
                className="btn"
                onClick={() =>
                  seeOnMaps(post.location.latitude, post.location.longitude)
                }
              >
                <MapPointerIcon /> Voir sur google maps
              </button>
            </div>
          </div>

          <div className="tarifs">
            <div className="tarifs-content flex items-center">
              <TicketIcon />

              <div className="tarif-card-container">
                <p>
                  <b>Tarifs et options</b>
                </p>

                <div className="tarif-card">
                  <div className="">
                    <p>Pass 2 Jours par pers.</p>
                    <p className="price">{post.price}€</p>
                  </div>
                  <div className="add">
                    <button
                      onClick={() => setCount1(Math.max(0, count1 - 1))}
                      disabled={count1 <= 0}
                    >
                      -
                    </button>
                    <input
                      className="text-center"
                      type="number"
                      value={count1}
                      min="0"
                      max="10"
                      onChange={(e) =>
                        setCount1(
                          Math.min(
                            10,
                            Math.max(0, parseInt(e.target.value) || 0)
                          )
                        )
                      }
                      disabled={count1 >= 10}
                    />
                    <button
                      onClick={() => setCount1(Math.min(10, count1 + 1))}
                      disabled={count1 >= 10}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="tarif-card">
                  <div className="">
                    <p>Pass 2 Jours VIP par pers.</p>
                    <p className="price">{(+post.price * 1.8).toFixed(2)}€</p>
                  </div>
                  <div className="add">
                    <button
                      onClick={() => setCount2(Math.max(0, count2 - 1))}
                      disabled={count2 <= 0}
                    >
                      -
                    </button>
                    <input
                      className="text-center"
                      type="number"
                      value={count2}
                      min="0"
                      max="10"
                      onChange={(e) =>
                        setCount2(
                          Math.min(
                            10,
                            Math.max(0, parseInt(e.target.value) || 0)
                          )
                        )
                      }
                      disabled={count2 >= 10}
                    />
                    <button
                      onClick={() => setCount2(Math.min(10, count2 + 1))}
                      disabled={count2 >= 10}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="participer"> Participer </Link>
      </div>

      <PostSwiper
        posts={posts.filter((post) => post.id !== parseInt(id, 10))}
        seeMoreText="Voir tout"
        seeMoreLink="/events"
        title="Dans le même style"
        nbPosts={3}
      />
    </div>
  );
};

export default SingleEventPage;
