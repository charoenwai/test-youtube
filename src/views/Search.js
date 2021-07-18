import React from "react";
import { Link } from "react-router-dom";
// import component
import SearchCard from "../components/cards/SearchCard";
// import styles
import "../styles/Search.css";
// import icons
import TuneIcon from "@material-ui/icons/Tune";
//import model
import mockupData from "../model/mockupData";

function Search() {
  return (
    <div className="seach-container">
      <div className="seach-content">
        <div className="seach-filter">
          <TuneIcon />
          <h2>ตัวกรอง</h2>
        </div>
        {mockupData.map((item, key) => {
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
  );
}

export default Search;
