import React from 'react';

export default class BookSearch extends React.Component {
	constructor(props) {
		super(props);
		this.bookInput = React.createRef();

		this.state = {
			library: [
				{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
				{ author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
				{ author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
				{ author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
				{ author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
				{ author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
				{ author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
				{ author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
				{ author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: "Jane's Fighting Ships" },
				{ author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
      ],
      
      decimalTarget:0,
      titleResponse:[],
		};
  }
  
handleBookClick(value){
  this.setState({titleResponse:[0]})
  this.setState({titleResponse: [{title: 'nothing found'} ]});
  for (let book of this.state.library) {
    if(value===book.dewey){
      console.log(book);
      this.setState({titleResponse: [...this.state.titleResponse, book]})
    } 
  }
}
  renderMessage(){
    const searchRes = this.state.titleResponse.map((book, index) => (
			<li key={index}>
	
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.dewey}</p>
 
			</li>
    ));
    
    return <ul>{searchRes}</ul>;
  }
      
  






	render() {
console.log(this.state.titleResponse);

		return (
			<section className="binarySearch">
				<h1>Find A Book</h1>

				<input type="text" ref={this.bookInput} />
				<button type="button" onClick={(e) => this.handleBookClick(this.bookInput.current.value)}>
					Search for Book
				</button>

				<div className='bookTitle'>{this.renderMessage()}</div>
			</section>
		);
	}
}
