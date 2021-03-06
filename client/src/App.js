import React, { Component } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
