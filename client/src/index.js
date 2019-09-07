import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BookList} from './components/BookList'
import {AddBook} from './components/AddBook'
import {Home} from './components/Home'

ReactDOM.render(
    <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/books" component={BookList} />
                    <Route path="/add-book" component={AddBook} />
                </Switch>
            </BaseLayout>
            </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
