import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import MainPage from './pages/MainPage'
import BlogPage from './pages/BlogPage'
import AboutUsPage from './pages/AboutUsPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={MainPage} />
            <Route path="/blog/:id" component={BlogPage} />
            <Route path='/aboutus' component={AboutUsPage} />
        </div>
    </Router>,
    document.getElementById('app')
)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
