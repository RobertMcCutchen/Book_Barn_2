import React, {Component} from 'react';
import './BookList.css'

export class BookDetail extends Component {
    constructor(props) {
        super(props)
        console.log(props.match.params.bookId) // get the bookId from url 
    }

    render() {
      return <div>BookDetail</div>
    }
}

export class BookList extends Component {
    constructor() {
        super()
        this.state={
            books: []
        }
    }
    getBooks() {
        fetch("http://localhost:3001/books")
            .then(promise => promise.json())
            .then(json => {
                this.setState({
                    books: json
                })
            })

    }
     
    componentDidMount() {
        this.getBooks()
    }

    deleteBook = (e) => {
        fetch("http://localhost:3001/delete-book", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.dataset.id
            })
        })
        .then(response => response.json())
            .then(result => {
                if(result.success) {
                    console.log('Success!')
                    this.viewBooks()
                } else {
                    console.log('Error!')
                }
            })       
    }
    

    render() {
      let booksToRender = this.state.books.map((book) => {
        return (
            <div className="bookListItem" key={book.id}>
                <img src={book.imageURL} alt={book.title}/>
                <h2>{book.title}</h2>
                <span>Genre: {book.genre}</span>
                <span>Publisher: {book.publisher}</span>
                <span>Year: {book.year}</span>
                <button data-id={book.id} onClick={this.deleteBook}>Delete</button>
            </div>
        )
      })
        return <div className="bookDisplay">{booksToRender}</div>
    }
}