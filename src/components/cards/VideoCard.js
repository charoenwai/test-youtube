import React from "react";
// import icons
import Avatar from "@material-ui/core/Avatar";
// import styles
import "../../styles/VideoCard.css";

function VideoCard(props) {
  const { Embed, Title, Chanel, Views, Timestamp, Description } = props;
  return (
    <div className="video-card">
      <div className="video-card-iframe">
        <iframe
          className="responsive-iframe"
          src={`https://www.youtube.com/embed/${Embed}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-card-info">
        <div className="video-card-text">
          <h4>{Title}</h4>
          {/* <p>{Chanel["name"]}</p> */}
          <p>
            การดู {Views} ครั้ง • {Timestamp}
          </p>
          {/* <p>{Description}</p> */}
        </div>
        <div className="video-card-profile">
          <Avatar
            className="video-card-avatar"
            alt={Chanel["name"]}
            src={Chanel["avatar"]}
          />
          <h5>{Chanel["name"]}</h5>
        </div>
        <div className="video-card-description">
          <p>{Description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
