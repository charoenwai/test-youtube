import React from "react";
import { Link } from "react-router-dom";
// import component
import Card from "../components/cards/Card";
// import styles
import "../styles/Recommended.css";
//import model
import mockupData from "../model/mockupData";
function RecommendedVideos() {
  return (
    <div className="recommended">
      <div className="reccomended-card">
        {mockupData.map((item, key) => {
          return (
            <Link key={key} to={`/video/${item["embed"]}`}>
              <Card
                Embed={item["embed"]}
                Title={item["title"]}
                Chanel={item["chanel"]}
                Views={item["views"]}
                Timestamp={item["timestamp"]}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
