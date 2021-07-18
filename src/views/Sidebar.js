import React from "react";
// import component
import SidebarRow from "../components/sidebar/SidebarRow";
// import styles
import "../styles/Sidebar.css";
// import icons
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Selected Icon={HomeIcon} Title="หน้าแรก" />
      <SidebarRow Icon={ExploreIcon} Title="สำรวจ" />
      <SidebarRow Icon={SubscriptionsIcon} Title="การติดตาม" />
      <SidebarRow Icon={YouTubeIcon} Title="Originals" />
      <SidebarRow Icon={MusicVideoIcon} Title="YouTube Music" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} Title="คลังวิดีโอ" />
      <SidebarRow Icon={HistoryIcon} Title="ประวัติการเข้าชม" />
      <SidebarRow Icon={OndemandVideoIcon} Title="วิดีโอของคุณ" />
      <SidebarRow Icon={WatchLaterIcon} Title="ดูภายหลัง" />
      <SidebarRow Icon={ThumbUpIcon} Title="วิดีโอที่ชอบ" />
    </div>
  );
}

export default Sidebar;
