import React, {Component} from 'react';
// import App from './App';
import {NavLink} from 'react-router-dom'


export class Menu extends Component {
    render() {
        return <header>
                    <ul>
                        <li><NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink></li>
                        <li><NavLink to="/books" style={{color: 'white', textDecoration: 'none'}}>View Books</NavLink></li>
                        <li><NavLink to="/add-book" style={{color: 'white', textDecoration: 'none'}}>Add Books</NavLink></li>
                    </ul>
                </header>
    }
}

export class Footer extends Component {
    render() {
        return <footer style={{color: 'white'}}>Book Barn&copy; Robert McCutchen, 2019</footer>
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div className="body">
                <Menu />
                <div className="children">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        ) 
    }
}