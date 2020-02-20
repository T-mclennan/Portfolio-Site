import React, { Component } from 'react';
import '../App.css';

export class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // words: [
      //   "ly under development. Updates coming soon!",
      //   " focus: gain fluency with the MERN software stack.",
      //   " project: Chess 960.",
      //   " resolution: Make small steps forward every day.",
      //   " event: HackDavis 2020 - the annual UC Davis Hackathon.",
      //   " passions: houseplants, karate, biking, cooking, building things in JavaScript.",
      //   'ly reading: "Clean Code" by Robert Cecil Martin.',
      //   " movie to discuss: Jojo Rabbit.",
      //   " netflix show: Outlander.",
      //   ' quote to ponder: "Premature optimization is the root of all evil."'
      // ],

      words: [
        '"Testing can show the presence of errors, but not the absence." - Edsger W. Dijkstra',
        '“Don’t comment bad code, rewrite it.”   - Brian W. Kernighan',
        '"Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away.. "   - Antoine de St. Exupery',
        '"Premature optimization is the root of all evil in programming."   - Donald Knuth',
        '"Without requirements or design, programming is the art of adding bugs to an empty text file.”   - Louis Srygley',
        '"Refactor early, refactor often."   - David Thomas',
        '"Science is what we understand well enough to explain to a computer. Art is everything else we do."   - Donald Knuth',
        '"The ratio of time spent reading code versus writing is well over 10 to 1 ... therefore making it easy to read makes it easier to write."   - Robert C Martin',
        '"Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do."   - Donald Knuth',
        '"Make it correct, make it clear, make it concise, make it fast. In that order."   – Wes Dyer',
      ],
      // intro: '',
      txt: '',
      wait: 1800,
      isDeleting: false,
      wordIndex: 0,
      cursorBlink: true,
    };
  }

  componentDidMount() {
    this.blink();
    setTimeout(() => this.type(), 1200);
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
    let typeSpeed = 50;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    // //If word is finished, pause and set deleting to true:
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = this.state.wait;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === '') {
      this.setState({ isDeleting: false, wordIndex: wordIndex + 1 });
      typeSpeed = 500;
    }

    setTimeout(
      () => this.type(),
      typeSpeed + this.randomTypeSpeed(0, typeSpeed)
    );
  };

  //Introductary typewriter phrase:
  introduction = () => {
    const { intro } = this.state;
    const fullTxt = 'Current';
    this.setState({ intro: fullTxt.substring(0, intro.length + 1) });

    if (intro === fullTxt) {
      return this.type();
    }

    let typeSpeed = 65;

    setTimeout(
      () => this.introduction(),
      typeSpeed + this.randomTypeSpeed(0, 10)
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
            borderRight: this.state.cursorBlink ? '0.2rem solid #777' : '',
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
  // fontFamily: "Raleway, sans-serif",
  // fontFamily: "Courgette, cursive",
  fontFamily: 'Spectral, serif',
  fontSize: '2.7rem',
};

export default Typer;
