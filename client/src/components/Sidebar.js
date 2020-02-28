import React, { Component } from 'react';
import headshot from '../assets/headshot.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import '../App.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='leftSidebar'>
        <a href='#home'>
          <img src={headshot} className='picture' alt='headshot' />
        </a>
        <div className='item'>
          <h4>Tristan Mclennan</h4>
          <div>Junior Full-Stack Developer</div>
        </div>
        <div className='projects'>
          <ul>
            <li>
              <a href='#chess'>Chess 960</a>
            </li>
            <li>
              <a href='#sfsafe'>Safe SF</a>
            </li>
            <li>
              <a href='#forms'>Form Project</a>
            </li>
          </ul>
        </div>
        <div className='media-container'>
          <div className='media'>
            <a href={'https://www.linkedin.com/in/t-mclennan'}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='icon far fa-2x fa-in'
                size='2x'
              />
            </a>
          </div>
          <div className='media'>
            <a href={'https://www.github.com/T-mclennan'}>
              <FontAwesomeIcon
                icon={faGithubSquare}
                className='icon far fa-2x fa-in'
                size='2x'
              />
            </a>
          </div>
          <div className='media'>
            <a href={'https://www.facebook.com/tristan.mclennan.1'}>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className='icon far fa-2x fa-in'
                size='2x'
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
