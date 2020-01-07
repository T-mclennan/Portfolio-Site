import React, { Component } from "react";
import headshot from "../assets/headshot.jpeg";
import "../App.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="leftSidebar">
        <img src={headshot} className="picture" alt="headshot" />
        <div className="item">
          <h4>Tristan Mclennan</h4>
          <div>Junior Full-Stack Developer</div>
        </div>
        <div className="projects">
          <div className="project">Chess 960</div>
          <div className="project">SFSafe</div>
          <div className="project">Forms</div>
        </div>
        <div className="media-container">
          <div className="media">L </div>
          <div className="media">G </div>
          <div className="media">F </div>
        </div>
        {/* <div className="item">Forms</div> */}
      </div>
    );
  }
}

export default Sidebar;
