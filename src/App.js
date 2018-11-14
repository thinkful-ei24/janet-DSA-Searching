import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.targetInput = React.createRef();
  this.dataInput = React.createRef();


  this.state={
    data: [89, 30, 25, 32, 72 ],
    count: 0,
    target:0,
    found:true,
  }
}

handleDataInput(value){
  this.setState({data: [value]});

}

handleLinearSearch(value, start, end){
const target = Number(value);
this.setState({target: `${target}`});
const arr = this.state.data;
let message;
let counter;

console.log(target, 'target')
for(let i =0; i<arr.length; i++ ){
  if(arr[i]===target){
   message = `Found ${target}`;
    counter = i +1;
  this.setState({count: `${counter}`})
  }
}

console.log(message);
}


  render() {
  console.log(this.state.data)
  console.log(this.state.count);
    return (
      <section className="App">

        <h1>Type Data Here</h1>
        <div>[{this.state.data}]</div>
        <input type='text'
        // onChange= {(e)=>this.handleDataInput(e.target.value)} 
        ref={this.dataInput}></input>

      <section className='linearSearch'>
       <h1 >Linear Search</h1>
       <h3>can only search one number at a time</h3>
       <input type='text' ref={this.targetInput}></input>
       <button type= 'button' onClick = {(e)=>{
         this.handleLinearSearch(this.targetInput.current.value);

         }}>
       Linear Search
       </button>

       <div>It took {this.state.count} times to find {this.state.target}</div>
       </section>
      </section>
    );
  }
}

export default App;
