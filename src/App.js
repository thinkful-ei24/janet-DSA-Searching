import React, { Component } from 'react';
import './App.css';
import BinarySearch from './binary_search';
class App extends Component {
constructor(props){
  super(props);
  this.targetInput = React.createRef();
  this.dataInput = React.createRef();


  this.state={
    data: [89, 30, 25, 32, 
      72, 70, 51, 42, 25, 24, 
      53, 55, 78, 50, 13, 40, 48,
      32, 26, 2, 14, 33, 45, 72, 56, 
      44, 21, 88, 27, 68, 15, 62, 93, 
      98, 73, 28, 16, 46, 87, 28, 65, 
      38, 67, 16, 85, 63, 23, 69, 64, 
      91, 9, 70, 81, 27, 97, 82, 6, 88, 
      3, 7, 46, 13, 11, 64, 76, 31, 26, 
      38, 28, 13, 17, 69, 90, 1, 6, 7, 64,
      43, 9, 73, 80, 98, 46, 27, 22, 87 ,
      49, 83, 6, 39, 42, 51, 54, 84, 34, 
      53, 78, 40, 14, 5],
    linearCount: 0,
    target:0,
    found:true,
    binaryCount:0,
    binaryTarget:0
  }
}

handleDataInput(value){
  this.setState({data: [...this.state.data,value]});

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
  const data = this.state.data.map(number=>number+',');

  console.log(this.state.data, 'data')
  // console.log(this.state.count);
    return (
      <section className="App">

        <h1>Type Data Here</h1>
        <div className='data'><p>[{data}]</p></div>
        <input type='text'
      
        ref={this.dataInput}></input>
        <button type= 'button' onClick ={(e)=>{
          console.log(this.dataInput.value, 'input');
          this.handleDataInput(Number(this.dataInput.current.value));

          }}>
        Add Value
        </button>

      <section className='linearSearch'>
       <h1 >Linear Search</h1>
       <h3>can only search one number at a time</h3>
       <input type='text' ref={this.targetInput}></input>
       <button type= 'button' onClick = {(e)=>{
         this.handleLinearSearch(this.targetInput.current.value);

         }}>
       Linear Search
       </button>

       <div>It took {this.state.linearCount} time(s) to find {this.state.target}</div>
       </section>


         <BinarySearch
        binarycount={this.state.binaryCount} 
         binaryClick={e=>console.log('hello')}/>
       
      </section>
    );
  }
}

export default App;
