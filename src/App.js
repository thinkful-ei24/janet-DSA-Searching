import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.input = React.createRef();
  this.state={
    count: 0,
    target:0
  }

const linearSearch = ()=>{
  this.setState({})
}
}



  render() {
    return (
      <section className="App">
        <h1>Type Data Here</h1>
       <input type='text' ref={this.input}></input>
       <button type= 'button' onClick = {(e)=>console.log(this.input.current.value)}>Linear Search</button>
       <div>It took {this.state.count} times to find {this.state.target}</div>
      </section>
    );
  }
}

export default App;
