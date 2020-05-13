import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { ThemeProvider, } from 'styled-components';

import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom';

// Static elements
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/about' component={ AboutPage } />
        <Route exact path='/gallery' component={ GalleryPage } />
        <Route exact path='/contact' component={ ContactPage } />
        <Route exact path='/404' component={ NotFound } />

        {/* Redirect as last resort for no path match found */}
        <Redirect to='/404' />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
