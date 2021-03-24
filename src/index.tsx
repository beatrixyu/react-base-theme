import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import './index.css';
import App from './App';

import Header from './headerMenu/Header'
import HomePage from './homePage/HomePage'
import LandingPage from './landingPage/LandingPage'
import PostPage from './postPage/PostPage'
import PostDetail from './postDetail/PostDetail'
import Login from './login/Login'
import SubmitPage from './SubmitPage/SubmitPage'


const routing = (
  <Router>
      <Header />
      <div className="page">
        <Switch>
        <Route exact path="/landingpage" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/landingpage" component={LandingPage} />
        <Route exact path="/posts" component={PostPage} />
        <Route exact path="/post-detail" component={PostDetail} />
        {/* <Route exact path="/FQA" component={FQA} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SubmitPage} />
        <Redirect to="/landingpage" />
          </Switch>
      </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

