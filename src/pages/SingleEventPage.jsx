import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const SingleEventPage = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));
  const navigate = useNavigate();

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

  return (
    <div className="singleEventPage">
      <img src={post.cover} alt="cover" className="cover" />
      <div className="content">
        <h1 className="title">Single Event {id}</h1>

        <div className="px-[40px] mt-3">
          <div className="author">
            <img src={post.author.pp} alt="Avatar" className="avatar" />
            <p>{post.author.name}</p>
          </div>

          <div className="date">
            <p className="start-date">
              <b>Début :</b> {dateFormatter(post.date.start)}
            </p>
            <p className="end-date">
              <b>Fin : </b>
              {dateFormatter(post.date.end)}
            </p>
          </div>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
