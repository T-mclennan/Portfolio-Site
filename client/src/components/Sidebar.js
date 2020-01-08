import React, { Component } from "react";
import headshot from "../assets/headshot.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "reactstrap";
import "../App.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="leftSidebar">
        <a href="#home">
          <img src={headshot} className="picture" alt="headshot" />
        </a>
        <div className="item">
          <h4>Tristan Mclennan</h4>
          <div>Junior Full-Stack Developer</div>
        </div>
        <div className="projects">
          <ul>
            <li>
              <a href="#chess">Chess 960</a>
            </li>
            <li>
              <a href="#sfsafe">SFSafe</a>
            </li>
            <li>
              <a href="#forms">Forms</a>
            </li>
          </ul>
          {/* <li className="project">Chess 960</li>
          <div className="project">SFSafe</div>
          <div className="project">Forms</div> */}
        </div>
        <div className="media-container">
          <div className="media">
            <a href={"https://www.linkedin.com/in/t-mclennan"}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon far fa-2x fa-in"
                size="2x"
              />
            </a>
          </div>
          <div className="media">
            <a href={"https://www.github.com/T-mclennan"}>
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="icon far fa-2x fa-in"
                size="2x"
              />
            </a>
          </div>
          <div className="media">
            <a href={"https://www.facebook.com/tristan.mclennan.1"}>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="icon far fa-2x fa-in"
                size="2x"
              />
            </a>
          </div>
        </div>
        {/* <div className="item">Forms</div> */}
      </div>
    );
  }
}

export default Sidebar;
