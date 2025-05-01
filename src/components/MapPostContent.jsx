import React from "react";
import { Link } from "react-router-dom";

const MapPostContent = ({ post, setSelectedPost }) => {
  const handleClose = () => {
    setSelectedPost(null);
  };

  const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="mapPostContent">
      <button className="close" onClick={handleClose}>
        x
      </button>
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
      <Link to={`/events/${post.id}`} className="link">
        Voir l'évènement
      </Link>
    </div>
  );
};

export default MapPostContent;
