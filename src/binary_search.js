import React from 'react';

export default class BinarySearch extends React.Component {
constructor(props){
  super(props);
  this.binaryInput = React.createRef();
}


// onClick = {e=>console.log(e.target.getAttribute('input'))}



  render(){
  return(
    <section className='binarySearch'>
    <h1 >Binary Search</h1>
    <h3>can only search one number at a time</h3>
    <input type='text' ref={this.binaryInput}></input>
    <button type= 'button' 
    onClick={e=>this.props.handleBinaryClick(this.binaryInput.current.value)}>
    Binary Search
    </button> 
   
    <div>{this.props.binaryMessage}</div>
    </section>
  );
  }

}