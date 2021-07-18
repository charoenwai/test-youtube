import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import component
import VideoCard from "../components/cards/VideoCard";
import SearchCard from "../components/cards/SearchCard";
// import styles
import "../styles/Video.css";
//import model
import mockupData from "../model/mockupData";

function Video() {
  let { videoId } = useParams();
  const [mainVideo, setMainVedio] = useState(null);
  const [subVideo, setSubVedio] = useState([]);

  useEffect(() => {
    const main = mockupData.filter((word) => word.embed === videoId);
    setMainVedio(main[0]);
    const sub = mockupData.filter((word) => word.embed !== videoId);
    setSubVedio(sub);
  }, [videoId]);

  return (
    <div className="video">
      <div className="video-content">
        <div className="video-main">
          {mainVideo && (
            <VideoCard
              Embed={mainVideo["embed"]}
              Title={mainVideo["title"]}
              Chanel={mainVideo["chanel"]}
              Views={mainVideo["views"]}
              Timestamp={mainVideo["timestamp"]}
              Description={mainVideo["description"]}
            />
          )}
        </div>
        <div className="video-sub">
          {subVideo.map((item, key) => {
            return (
              <Link key={key} to={`/video/${item["embed"]}`}>
                <SearchCard
                  Embed={item["embed"]}
                  Title={item["title"]}
                  Chanel={item["chanel"]}
                  Views={item["views"]}
                  Timestamp={item["timestamp"]}
                  Description={item["description"]}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;
