import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BookList} from './components/BookList'
import {AddBook} from './components/AddBook'
import {Home} from './components/Home'
//import BookUpdate from './components/BookUpdate'
import Login from './components/Login'
import Register from './components/Register'
import {setAuthenticationHeader} from './utils/authenticate'

//Get the token
let token = localStorage.getItem('jsonwebtoken')
//and attach it to the header
setAuthenticationHeader(token)

ReactDOM.render(
    <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/api/home" exact component={Home} /> 
                    <Route path="/api/books" component={BookList} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/api/add-book" component={AddBook} />
                </Switch>
            </BaseLayout>
            </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
