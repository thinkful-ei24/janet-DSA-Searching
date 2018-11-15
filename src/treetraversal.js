import React from 'react';
import {BinarySearchTree}  from './binarySearchTreeClass';



const tree = new BinarySearchTree();
const postTree = new BinarySearchTree();
const preTree = new BinarySearchTree();
const data=[25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
data.forEach(num=>{
  tree.insert(num,num);
  postTree.insert(num,num);
  preTree.insert(num,num);

} );

export default class TreeTraversal extends React.Component {
constructor(props){
  super(props);

  this.state={
    postOrder: postTree.dfsPostOrder(),
    inOrder:tree.dfsInOrder(),
    preOrder: preTree.dfsPreOrder()
  }


}



render(){

  return(
    <section>
      <h1>Tree Traversal</h1>
   <div>
     <h3>Data</h3>
   {data.map(num=> num+ ' ')}
   </div>

      <div>
     <h3>In Order</h3>
   {/* {this.dsfPreOrder(this.tree)} */}
   {this.state.inOrder.map(num=> num+ ' ')}
   </div>

         <div>
     <h3>Post Order</h3>
   {/* {this.dsfPreOrder(this.tree)} */}
   {this.state.postOrder.map(num=> num+ ' ')}
   </div>

      <div>
     <h3>Pre Order</h3>
   {/* {this.dsfPreOrder(this.tree)} */}
   {this.state.preOrder.map(num=> num+ ' ')}
   </div>

    </section>
 
  )
}

}