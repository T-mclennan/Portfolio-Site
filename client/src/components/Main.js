import React, { Component } from 'react';
import Typer from './Typer';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className='mainContent'>
        <section id='home'>
          <div class='stars'>
            {' '}
            <Typer />
          </div>
        </section>

        <section id='home2'>
          <div class='stars'> </div>
        </section>

        <section id='chess'>
          <div className='chess-header header'>
            <div className='header-content'>
              <a href={'https://chess-960.herokuapp.com/'} target='_blank'>
                Chess 960
              </a>
              <div className='subHeader'>
                <a
                  href={'https://github.com/T-mclennan/Chess-960'}
                  target='_blank'
                >
                  <h3>Github</h3>
                </a>
                <h3 style={{ color: 'white' }}>|</h3>
                <a href={'https://chess-960.herokuapp.com/'} target='_blank'>
                  <h3>Deployment</h3>
                </a>
              </div>
            </div>
          </div>

          <div className='project-details description-top chess-top'>
            <h2>Description:</h2>
            <hr />
            <h5>
              Real-time chess application with randomized start positions. A
              board generation algorithm ensures that there is a relative
              balance between players, and given these constraints there are 960
              possible start positions.
            </h5>
          </div>
        </section>

        <section id='chess2'>
          <div className='project-details description-bottom chess-bottom'>
            <h2>Architecture:</h2>
            <hr />
            <h5>
              <ul>
                <li>Node.js with Express for backend.</li>
                <li>React, Redux, Reactstrap, CSS.</li>
                <li>JWT for Authentication.</li>
                <li>MongoDB Atlas for storage.</li>
                <li>Socket.io for real time data transfer.</li>
                <li>Deployed on Heroku</li>
              </ul>
            </h5>
            <hr />
            <h2>Features:</h2>
            <hr />
            <h5>
              <ul>
                <li>GUI for Lobby, Game creation, and Game logic.</li>
                <li>
                  Players can create a new game with any specified options,
                  either 960 or regular.
                </li>
                <li>
                  Players can see and rejoin past games from the dashboard.
                </li>
                <li>
                  Quickgame action joins an open game, if none are available it
                  will create and join a generic new game.
                </li>
                <li>
                  Find Game action offers a list of available games to join.
                </li>
                <li>View of online players in lobby real time.</li>
              </ul>
            </h5>
          </div>
        </section>

        <section id='sfsafe'>
          <div className='safesf-header header'>
            <div className='header-content'>
              <a href={'http://safesf.ddns.net/'} target='_blank'>
                Safe SF
              </a>
              <div className='subHeader'>
                <a
                  href={
                    'https://github.com/T-mclennan/Summer-Project-2019/tree/master/application'
                  }
                  target='_blank'
                >
                  <h2>Github</h2>
                </a>
                <h3>|</h3>
                <a href={'http://safesf.ddns.net/'} target='_blank'>
                  <h2>Deployment</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='project-details description-top sfsafe-top'>
            <h2>Description:</h2>
            <hr />
            <h5>
              Environmental web application where San Francisco residents can
              report and view environmental hazards to the city. This was a
              project from a software engineering class from the summer of 2019.
            </h5>
          </div>
        </section>

        <section id='sfsafe2'>
          <div className='project-details description-bottom sfsafe-bottom'>
            <h2>Architecture:</h2>
            <hr />
            <h5>
              <ul>
                <li>Node.js with Express for backend</li>
                <li>Javascript, CSS, Bootstrap</li>
                <li>JWT for Authentication</li>
                <li>MySQL for storage</li>
                <li>Google Map and Geolocation APIs</li>
                <li>Deployed on AWS</li>
              </ul>
            </h5>
            <hr />
            <h2>Features:</h2>
            <hr />
            <h5>
              <ul>
                <li>
                  Search and view the details of hazards that have been reported
                  around the city.
                </li>
                <li>
                  Filter results on the map based on category, location, and
                  description.
                </li>
                <li>
                  Authenticated users can submit a hazard report, including a
                  description, picture, and location pin.
                </li>
                <li>
                  Special Access token given to admins, allow them to see
                  pending hazards, and assign or deny them.
                </li>
              </ul>
            </h5>
          </div>
        </section>

        <section id='forms'>
          <div className='forms-header header'>
            <div className='header-content'>
              <a
                href={'https://tmclennan-form-assignment.herokuapp.com/'}
                target='_blank'
              >
                Form Project
              </a>
              <div className='subHeader'>
                <a
                  href={'https://github.com/T-mclennan/Forms-Practice'}
                  target='_blank'
                >
                  <h3>Github</h3>
                </a>
                <h3>|</h3>
                <a
                  href={'https://tmclennan-form-assignment.herokuapp.com/'}
                  target='_blank'
                >
                  <h3>Deployment</h3>
                </a>
              </div>
            </div>
          </div>

          {/* <p>
            Forms practice aims to develop professionalism around the use of
            forms. - Node and Express for the server - EJS was used to template
            the pages - Bootstrap and CSS for styling - Costum regex for
            validation - reCaptcha 2.0 - Google map and geolocation services
          </p> */}

          <div className='project-details description-top forms-top'>
            <h2>Description:</h2>
            <hr />
            <h5>
              Input form with high design quality, error handling, field
              validation, robustness to attacks, cross browser and platform
              compatibility and usability. Created as an assignment in UI/UX
              class for Summer 2019.
            </h5>
          </div>
        </section>

        <section id='forms2'>
          <div className='project-details description-bottom forms-bottom'>
            <h2>Architecture:</h2>
            <hr />
            <h5>
              <ul>
                <li>Node.js with Express for backend</li>
                <li>HTML, EJS, CSS, Bootstrap</li>
                <li>Google Maps, Geolocation, reCaptcha v2 APIs </li>
                <li>Deployed on Heroku</li>
              </ul>
            </h5>
            <hr />
            <h2>Features:</h2>
            <hr />
            <h5>
              <ul>
                <li>Clear and concise Input Form</li>
                <li>Custom Regex patterns for client side validation</li>
                <li>
                  HTML template EJS is used to generate a results page to
                  display information back to user.
                </li>
                <li>
                  Geolocation and Map API show the location of the provided
                  address.
                </li>
              </ul>
            </h5>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
