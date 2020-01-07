import React, { Component } from "react";
import "../App.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="leftSidebar">
        <div className="item">Left Sidebar</div>
        <div className="item">pic</div>
        <div className="item">Chess</div>
        <div className="item">SFsafe</div>
        <div className="item">Forms</div>
      </div>
    );
  }
}

export default Sidebar;
