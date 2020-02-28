import React, { Component } from 'react';
import '../App.css';

export class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [
        '"Science is what we understand well enough to explain to a computer. Art is everything else we do."   - Donald Knuth',
        '"Testing can show the presence of errors, but not the absence." - Edger W. Dijkstra',
        '“Don’t comment bad code, rewrite it.”   - Brian W. Kernighan',
        '"Avoid making premature abstractions." - Dan Abramov',
        '"Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away.. "   - Antoine de St. Exupery',
        '"Premature optimization is the root of all evil in programming."   - Donald Knuth',
        '"Refactor early, refactor often."   - David Thomas',
        '"Without requirements or design, programming is the art of adding bugs to an empty text file.”   - Louis Srygley',
        '"The ratio of time spent reading code versus writing is well over 10 to 1 ... therefore making it easy to read makes it easier to write."   - Robert C Martin',
        '"Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do."   - Donald Knuth',
        '"Make it correct, make it clear, make it concise, make it fast. In that order."   – Wes Dyer',
      ],
      txt: '',
      wait: 1800,
      isDeleting: false,
      wordIndex: 0,
      cursorBlink: true,
    };
  }

  componentDidMount() {
    const { words } = this.state;
    this.blink();
    setTimeout(() => this.type(), 1200);

    //Generate a random quote index to start with:
    this.setState({
      wordIndex: Math.floor(Math.random() * Math.floor(words.length - 1)),
    });
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
      typeSpeed /= 3;
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
