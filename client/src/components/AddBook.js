import React, {Component} from 'react';
import '../App.css'

export class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageURL: ''
        };
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value 
        })
    }

    viewBooks = () => {
        this.props.history.push('/books')
    }

    handleSubmit = () => {
        fetch("http://localhost:3001/add-book", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageURL: this.state.imageURL
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
        return (
            <div className="addBookContainer">
            <div className="addBookForm">
                <input type="text" name="title" placeholder="Enter title" onChange={this.handleChange}/>
                <input type="text" name="genre" placeholder="Enter genre" onChange={this.handleChange}/>
                <input type="text" name="publisher" placeholder="Enter publisher" onChange={this.handleChange}/>
                <input type="text" name="year" placeholder="Enter year" onChange={this.handleChange}/>
                <input type="text"  name="imageURL" placeholder="Enter image URL" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} type="submit">Add Book!</button>
            </div>
            </div>
        )
    }
}