import React, { Component } from "react";
import Typer from "./Typer";
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
          {/* <h2>
            I enjoy the design and testing of systems. Here are some of my
            recent projects:
          </h2> */}
          <div class="stars"> </div>
        </section>
        <section id="chess">
          <h1>Chess 960</h1>
          <hr />
          <span>
            <a href={"https://tmclennan-form-assignment.herokuapp.com/"}>
              <h3>Github</h3>
            </a>
            <a href={"https://tmclennan-form-assignment.herokuapp.com/"}>
              <h3>Deployment</h3>
            </a>
          </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            error quaerat dolore alias libero temporibus dolorum maiores
            officiis sunt dignissimos nulla molestias, unde in atque consectetur
            architecto ullam et sit.
          </p>
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
          <h1>SFsafe</h1>
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
          <a href={"https://tmclennan-form-assignment.herokuapp.com/"}>
            <h1>Form Practice</h1>
          </a>

          <p>
            Forms practice aims to develop professionalism around the use of
            forms. - Node and Express for the server - EJS was used to template
            the pages - Bootstrap and CSS for styling - Costum regex for
            validation - reCaptcha 2.0 - Google map and geolocation services
          </p>
        </section>

        <section id="forms2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            error quaerat dolore alias libero temporibus dolorum maiores
            officiis sunt dignissimos nulla molestias, unde in atque consectetur
            architecto ullam et sit.
          </p>
        </section>
      </div>
    );
  }
}

export default Main;
