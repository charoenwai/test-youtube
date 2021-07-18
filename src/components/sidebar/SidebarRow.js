import React from "react";
// import styles
import "../../styles/SidebarRow.css";
function SidebarRow({ Selected, Icon, Title }) {
  return (
    <div className={`sidebar-row ${Selected && "selected"}`}>
      <Icon className="sidebar-row-icon" />
      <h2 className="sidebar-row-title">{Title}</h2>
    </div>
  );
}

export default SidebarRow;
