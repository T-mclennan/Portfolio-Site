import React, { Component } from "react";
import { Container } from "reactstrap";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
