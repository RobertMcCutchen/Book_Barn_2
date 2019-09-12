import React, {Component} from 'react';
import './Home.css';
import photo from './books.jpeg'

export class Home extends Component {

    render() {
        return(
            <div className="homeDiv">
                <img src={photo} alt="books" />
                <span className="homeTitle"><p>Book Barn</p></span>
            </div>
        )
    }
}