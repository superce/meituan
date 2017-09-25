import React, { PropTypes } from 'react';
import {Link,NavLink} from "react-router-dom";
import '../css/footer.css';
import '../css/iconfont.css';
class Footer extends React.Component {
  render () {
    return(
      <div className="footer">
        <NavLink exact activeStyle={{color:"#FFCC33"}} to="/">
          <i className="iconfont icon-home"></i>
          <div>首页</div>
        </NavLink>
        <NavLink activeStyle={{color:"#FFCC33"}} to="/about">
          <i className="iconfont icon-dingdan3"></i>
          <div>订单</div>
        </NavLink>
        <NavLink activeStyle={{color:"#FFCC33"}} to="/blog">
          <i className="iconfont icon-dog"></i>
          <div>我的</div>
        </NavLink>
      </div>
    )
  }
}

export default Footer;
