import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    count: 0,
    target:0
  };
}

  render() {
    return (
      <section className="App">
        <h1>Type Data Here</h1>
       <input type='text'></input>
       <button type= 'button'>Linear Search</button>
       <div>It took {this.state.count} times to find {this.state.target}</div>
      </section>
    );
  }
}

export default App;
