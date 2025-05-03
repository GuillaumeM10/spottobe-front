import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PointsIcon from "../assets/layout/PointsIcon";
import CalandarIcon from "../assets/CalandarIcon";
import MapPointerIcon from "../assets/MapPointerIcon";

const SingleEventPage = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));
  const navigate = useNavigate();

  console.log("post", post);

  let tagClass = post.tags[0].toLowerCase().replace(/\s+/g, "-");
  tagClass = tagClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    if (!post) {
      navigate("/");
      return;
    }
  }, [id, post, navigate]);

  if (!post) {
    return <div>Chargement...</div>;
  }

  const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  };

  const handleAddToCalandar = (date) => {
    const startDate = new Date(date.start)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    const endDate = new Date(date.end).toISOString().replace(/-|:|\.\d+/g, "");

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&text=${post.title}&details=${post.content}`;
    window.open(url, "_blank");
  };

  const handleSeeOnMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

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
          <img src={post.cover} alt="cover" className="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.cover} alt="cover" className="cover" />
        </SwiperSlide>
      </Swiper>

      <div className="content">
        <h1 className="title">Single Event {id}</h1>

        <di className="tags flex items-center gap-[6px]">
          <p className={`tag tag-${tagClass}`}>
            <span className="circle"></span> {post.tags[0]}
          </p>
          <p className="points flex items-center border-[1px] border-[#F9B54C] rounded-[50px] px-2 py-1 w-fit">
            +{post.points} <PointsIcon />{" "}
          </p>
        </di>

        <div className="px-[40px] mt-3">
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
            <label for="read-more" className="read-more">
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

              <button
                class="btn"
                onClick={() => handleAddToCalandar(post.date)}
              >
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
                class="btn"
                onClick={() =>
                  handleSeeOnMaps(
                    post.location.latitude,
                    post.location.longitude
                  )
                }
              >
                <MapPointerIcon /> Voir sur google maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
