import React, { Component } from "react";
import "../App.css";

export class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [
        "ly under development. Updates coming soon!",
        " focus: gain fluency with the MERN software stack.",
        " project: Chess 960.",
        " resolution: Make small steps forward every day.",
        " event: HackDavis 2020 - the annual UC Davis Hackathon.",
        " passions: houseplants, karate, biking, gaming, learning to code.",
        'ly reading: "Clean Code." by Robert Cecil Martin',
        " movie to discuss: Parasite.",
        " netflix show: Outlander.",
        ' quote to ponder: "Premature optimization is the root of all evil."'
      ],
      intro: "",
      txt: "",
      wait: 1800,
      isDeleting: false,
      wordIndex: 0,
      cursorBlink: true
    };
  }

  componentDidMount() {
    this.blink();
    setTimeout(() => this.introduction(), 1200);
  }

  randomTypeSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  type = () => {
    const { wordIndex, words, isDeleting, txt } = this.state;
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    //Check if Deleting:
    if (!isDeleting) {
      this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
    } else {
      this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
    }

    //Initial type Speed:
    let typeSpeed = 80;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    // //If word is finished, pause and set deleting to true:
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = this.state.wait;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === "") {
      this.setState({ isDeleting: false, wordIndex: wordIndex + 1 });
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed + this.randomTypeSpeed(0, 75));
  };

  //Introductary typewriter phrase:
  introduction = () => {
    const { intro } = this.state;
    const fullTxt = "Current";
    this.setState({ intro: fullTxt.substring(0, intro.length + 1) });

    if (intro === fullTxt) {
      return this.type();
    }

    let typeSpeed = 75;

    setTimeout(
      () => this.introduction(),
      typeSpeed + this.randomTypeSpeed(0, 35)
    );
  };

  blink = () => {
    this.setState({ cursorBlink: !this.state.cursorBlink });

    setTimeout(() => this.blink(), 500);
  };

  render() {
    return (
      <h2 style={typeStyling}>
        <span
          style={{
            borderRight: this.state.cursorBlink ? "0.2rem solid #777" : ""
          }}
        >
          {this.state.intro}
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
