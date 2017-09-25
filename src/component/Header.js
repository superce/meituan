import React, { PropTypes } from 'react';
import '../css/header.css';
import '../css/iconfont-header.css';
import {hashHistory} from 'react-router-dom';
class Header extends React.Component {
  render () {
    return(
      <div className="header">
        <div className='return'>
          <i className="header-iconfont icon-fanhui" onClick={() => hashHistory.goBack()}></i>
        </div>
        <div className="title"><h1>美团外卖</h1></div>
        <div className='more'>
          <i className="header-iconfont icon-gengduo"></i>
        </div>
      </div>
    )
  }
}

export default Header;
