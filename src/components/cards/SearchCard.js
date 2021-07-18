import React from "react";
// import icons
import Avatar from "@material-ui/core/Avatar";
// import styles
import "../../styles/SearchCard.css";

function SearchCard(props) {
  const { Embed, Title, Chanel, Views, Timestamp, Description } = props;
  return (
    <div className="search-card">
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${Embed}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="search-card-info">
        <div className="search-video-text">
          <h4>{Title}</h4>
          <p>
            การดู {Views} ครั้ง • {Timestamp}
          </p>
        </div>
        <div className="search-video-profile">
          <Avatar
            className="search-video-avatar"
            alt={Chanel["name"]}
            src={Chanel["avatar"]}
          />
          <p>{Chanel["name"]}</p>
        </div>
        <div className="search-video-description">
          <p>{Description}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
