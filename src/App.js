import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import IterationSample from './IterationSample';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <IterationSample/>
        <Main/>

      </div>
    );
  }
}

export default App;
