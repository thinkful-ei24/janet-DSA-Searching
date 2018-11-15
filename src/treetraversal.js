import React from 'react';
import {BinarySearchTree}  from './binarySearchTreeClass';





export default class TreeTraversal extends React.Component {
constructor(props){
  super(props);

  this.state={
    data: [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22],
    postOrder:[],
    inOrder:[]
  }

  this.tree = new BinarySearchTree();

}

insertDataFromState(){
  this.state.data.forEach(num=> this.tree.insert(num));
}


render(){
this.insertDataFromState();
console.log(this.tree);
  return(
    <section>
      <h1>Tree Traversal</h1>
   <div>
     <h3>Data</h3>
   {this.state.data.map(num=> num+ ' ')}
   </div>

      <div>
     <h3>Post Order</h3>
   {this.state.data.map(num=> num+ ' ')}
   </div>

    </section>
 
  )
}

}