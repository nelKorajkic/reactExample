import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


//components

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';


class App extends Component {

  render() {

    const greeting = 'Hello there,';

    return (
      <Router>
      <div className="App">
      <Header greeting={greeting}/>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Products' component={Products} />

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
