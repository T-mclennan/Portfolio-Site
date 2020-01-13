import React, { Component } from "react";
import "../App.css";

export class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [
        "focus: gain fluency with the MERN stack.",
        "passions: houseplants, learning karate, coding in javaScript.",
        "project: Chess 960.",
        "goal: Learn something new every day.",
        "event: Hackathon 2020 @ UC Davis.",
        "book: Clean Code.",
        "favorite movie: Parasite."
      ],
      txt: "",
      wait: 3000,
      isDeleting: false,
      wordIndex: 0,
      cursorBlink: true
    };
  }

  componentDidMount() {
    this.type();
    this.blink();
  }

  randomTypeSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  type = () => {
    const { wordIndex, words, isDeleting, txt } = this.state;
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    console.log(fullTxt);

    //Check if Deleting:
    if (!isDeleting) {
      this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
    } else {
      this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
    }

    //Initial type Speed:
    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    // //If word is finished, pause and set deleting to true:
    if (!isDeleting && txt === fullTxt) {
      console.log("word finished");
      typeSpeed = this.state.wait;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === "") {
      console.log("delete finished");
      this.setState({ isDeleting: false, wordIndex: wordIndex + 1 });
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed + this.randomTypeSpeed(0, 75));
  };

  blink = () => {
    this.setState({ cursorBlink: !this.state.cursorBlink });

    setTimeout(() => this.blink(), 500);
  };

  render() {
    return (
      <h2 style={typeStyling}>
        Current
        <span
          style={{
            borderRight: this.state.cursorBlink ? "0.2rem solid #777" : ""
          }}
        >
          {" "}
          {this.state.txt}
        </span>
      </h2>
    );
  }
}

const typeStyling = {
  fontFamily: "Raleway, sans-serif",
  fontSize: "3.5rem"
};

export default Typer;
