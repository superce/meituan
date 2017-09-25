import React, { PropTypes } from 'react'
import {Route} from "react-router-dom"
import About from './About'
import Blog from './Blog'
import Home from './Home'
class Main extends React.Component {
  render () {
    return(
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </div>
    )
  }
}

export default Main;
