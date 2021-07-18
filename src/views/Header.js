import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles
import "../styles/Header.css";
// import logo
import YoutubeLogo from "../assets/youtubeLogo.png";
// import icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon className="header-icon" />
        <Link to="/">
          <img className="header-logo" src={YoutubeLogo} alt="" />
        </Link>
      </div>

      <div className="header-center">
        <input
          placeholder="ค้นหา"
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-search-icon" />
        </Link>
      </div>

      <div className="header-right">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          className="header-icon-avatar"
          src="https://avatars.githubusercontent.com/u/45628208?s=60&v=4"
          alt="Thaksin Charoenwai"
          onClick={() =>
            window.open("https://github.com/charoenwai/test-youtube", "_blank")
          }
        />
      </div>
    </div>
  );
}

export default Header;
