import React, { Component } from 'react';
import Book from './Book';
import bookdata from './bookData';

class BookList extends Component {
    constructor(props){
        super(props);
    this.state={
        books: bookdata
        // name: 'john'
    }
    }

    handleDelete= id=>{
        // console.log(id)
        console.log(this.state.books)
        const sortedBooks=this.state.books.filter((item)=>item.id !== id)
        // console.log(this.state.books);
        // console.log(this.sortedBooks);
        // console.log(sortedBooks)
        this.setState({
            books: sortedBooks
        })
    }
    
    render() { 
        
        return (
            <section>
            <h1>This is our booklist</h1>
          {this.state.books.map((item,index)=>(
<Book key={index} info={item} handleDelete={this.handleDelete}/>
          ))}
          
           </section>
        );
    }
}
 
export default BookList;