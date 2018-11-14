import React from 'react';

export default function BinarySearch (props){

  return(
    <section className='binarySearch'>
    <h1 >Binary Search</h1>
    <h3>can only search one number at a time</h3>
    <input type='text'></input>
    <button type= 'button' onClick = {props.binaryClick}>
    Binary Search
    </button> 
   
    <div>It took {props.binarycount} time(s) to find {props.binaryTarget}</div>
    </section>
  );

}