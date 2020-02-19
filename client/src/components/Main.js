import React, { Component } from "react";
import Typer from "./Typer";
import { Container } from "reactstrap";
import "../App.css";

class Main extends Component {
  render() {
    return (
      <div className="mainContent">
        <section id="home">
          <div class="stars">
            {" "}
            <Typer />
          </div>
        </section>

        <section id="home2">
          <div class="stars"> </div>
        </section>

        <section id="chess">
          <div className="chess-header header">
            <div className="screen">
              <div className="screen2">
                <a
                  href={"https://chess-960.herokuapp.com/"}
                  style={{ color: "white" }}
                  target="_blank"
                >
                  Chess 960
                </a>
                <div className="subHeader">
                  <a
                    href={"https://github.com/T-mclennan/Chess-960"}
                    target="_blank"
                  >
                    <h3>Github</h3>
                  </a>
                  <a>
                    <h3>|</h3>
                  </a>
                  <a href={"https://chess-960.herokuapp.com/"} target="_blank">
                    <h3>Deployment</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <hr /> */}
          {/* <div className="section-content">
            <p>
              This style of chess integrates an element of randomness into the
              classic game, while still providing balance in the start
              positions. There are a total of 960 unique opening positions
              possible.
            </p>

            <p>On the left sidebar you'll find:</p>

            <ul>
              <li>
                Quickstart: joins an open game, if none are available it will
                create one.
              </li>
              <li>
                New Game: creates a new game with the desired game options.
              </li>
              <li>
                Find Game: Offers a list of available games for you to join.
              </li>
              <li>Standings: Shows the current score of all top players.</li>
            </ul>
          </div> */}
        </section>

        <section id="chess2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            error quaerat dolore alias libero temporibus dolorum maiores
            officiis sunt dignissimos nulla molestias, unde in atque consectetur
            architecto ullam et sit.
          </p>
        </section>

        <section id="sfsafe">
          <div className="header">
            <a href={"http://safesf.ddns.net/"} target="_blank">
              {/* <h1>Safe SF</h1> */}
              Safe SF
            </a>
            <div className="subHeader">
              <a
                href={
                  "https://github.com/T-mclennan/Summer-Project-2019/tree/master/application"
                }
                target="_blank"
              >
                <h2>Github</h2>
              </a>
              <a>
                <h3>|</h3>
              </a>
              <a href={"http://safesf.ddns.net/"} target="_blank">
                <h2>Deployment</h2>
              </a>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            error quaerat dolore alias libero temporibus dolorum maiores
            officiis sunt dignissimos nulla molestias, unde in atque consectetur
            architecto ullam et sit.
          </p>
        </section>

        <section id="sfsafe2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            error quaerat dolore alias libero temporibus dolorum maiores
            officiis sunt dignissimos nulla molestias, unde in atque consectetur
            architecto ullam et sit.
          </p>
        </section>

        <section id="forms">
          <div className="header">
            <a
              href={"https://tmclennan-form-assignment.herokuapp.com/"}
              target="_blank"
            >
              {/* <h1>Form Practice</h1> */}
              Form Project
            </a>
          </div>

          <p>
            Forms practice aims to develop professionalism around the use of
            forms. - Node and Express for the server - EJS was used to template
            the pages - Bootstrap and CSS for styling - Costum regex for
            validation - reCaptcha 2.0 - Google map and geolocation services
          </p>
        </section>
      </div>
    );
  }
}

export default Main;
