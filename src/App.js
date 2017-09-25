import React from 'react';
import './css/App.css'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer.js';
import {
  BrowserRouter as Router
} from "react-router-dom";
class App extends React.Component {

  render () {
    return(
      <Router>
        <div className="app">
          <div className="app-header">
            <Header />
          </div>
          <div className="app-main">
            <Main />
          </div>
          <div className="app-footer">
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
