import React from "react";
// import icons
import Avatar from "@material-ui/core/Avatar";
// import styles
import "../../styles/Card.css";
function Card(props) {
  const { Embed, Title, Chanel, Views, Timestamp } = props;

  return (
    <div className="card">
      <iframe
        width="380"
        height="200"
        src={`https://www.youtube.com/embed/${Embed}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="card-info">
        <Avatar
          className="card-video-avatar"
          alt={Chanel["name"]}
          src={Chanel["avatar"]}
        />
        <div className="card-video-text">
          <h4>{Title}</h4>
          <p>{Chanel["name"]}</p>
          <p>
            การดู {Views} ครั้ง • {Timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
