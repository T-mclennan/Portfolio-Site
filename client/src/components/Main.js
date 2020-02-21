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
                  Players can see and re-join past games from the dashboard.
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
                <a>
                  <h3>|</h3>
                </a>
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
              Real-time chess application with randomized start positions. A
              board generation algorithm ensures that there is a relative
              balance between players, and given these constraints there are 960
              possible start positions.
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
                <li>React, Redux, Reactstrap, CSS</li>
                <li>JWT for Authentication</li>
                <li>MongoDB Atlas for storage</li>
                <li>Socket.io for real time data transfer</li>
              </ul>
            </h5>
            <hr />
            <h2>Features:</h2>
            <hr />
            <h5>
              <ul>
                <li>GUI for Lobby, Game creation, and Game logic</li>
                <li>
                  Players can create a new game with specified options, either
                  960 style or regular.
                </li>
                <li>Players can see and rejoin past games from dashboard</li>
                <li>
                  Quickgame action joins an open game, if none are available it
                  will create one.
                </li>
                <li>Find game action offers a list of open games to join</li>
                <li>View of online players in lobby real time</li>
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
                <a>
                  <h3>|</h3>
                </a>
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
              Real-time chess application with randomized start positions. A
              board generation algorithm ensures that there is a relative
              balance between players, and given these constraints there are 960
              possible start positions.
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
                <li>React, Redux, Reactstrap, CSS</li>
                <li>JWT for Authentication</li>
                <li>MongoDB Atlas for storage</li>
                <li>Socket.io for real time data transfer</li>
              </ul>
            </h5>
            <hr />
            <h2>Features:</h2>
            <hr />
            <h5>
              <ul>
                <li>GUI for Lobby, Game creation, and Game logic</li>
                <li>
                  Players can create a new game with specified options, either
                  960 style or regular.
                </li>
                <li>Players can see and rejoin past games from dashboard</li>
                <li>
                  Quickgame action joins an open game, if none are available it
                  will create one.
                </li>
                <li>Find game action offers a list of open games to join</li>
                <li>View of online players in lobby real time</li>
              </ul>
            </h5>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
