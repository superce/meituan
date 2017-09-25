import React, { PropTypes } from 'react';
import axios from 'axios'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import '../css/home.css';
import '../css/home-iconfont.css';
class Home extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      // 0 没搜索， 1 后台还没响应数据为接收 2 数据接受完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.github.getValue();
    axios.get(`https://api.github.com/users/${value}`)
      .then(res => this.setState({data:res.data,wait:2}))
      .catch( error => {alert(error);this.setState({wait:0})} )
      this.ref.form.reset()
  }
  render () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };
    return(
      <div className="home">
        <div className="search">
          <form className="form-inline">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail2" placeholder="寻找美食" />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>搜索</button>
          </form>
        </div>
        <Slider {...settings}>
          <div className="slider">
            <div className="title-pic">
              <Link to="/">
                <i className="home-iconfont icon-xiaochi"></i>
                <div>小吃</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-diandongche1"></i>
                <div>美团专送</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-shengxianshuguo"></i>
                <div>果蔬</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-youxuanzhutui-"></i>
                <div>优选</div>
              </Link>
            </div>
            <div className="title-pic">
              <Link to="/">
                <i className="home-iconfont icon-shangjia"></i>
                <div>商家</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-gouwu-2"></i>
                <div>超市</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-meishi"></i>
                <div>美食</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-drink"></i>
                <div>饮品</div>
              </Link>
            </div>
          </div>
          <div className="slider">
            <div className="title-pic">
              <Link to="/">
                <i className="home-iconfont icon-xiaochi"></i>
                <div>小吃</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-diandongche1"></i>
                <div>美团专送</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-shengxianshuguo"></i>
                <div>果蔬</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-youxuanzhutui-"></i>
                <div>优选</div>
              </Link>
            </div>
            <div className="title-pic">
              <Link to="/">
                <i className="home-iconfont icon-shangjia"></i>
                <div>商家</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-gouwu-2"></i>
                <div>超市</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-meishi"></i>
                <div>美食</div>
              </Link>
              <Link to="/">
                <i className="home-iconfont icon-drink"></i>
                <div>饮品</div>
              </Link>
            </div>
          </div>
        </Slider>
        <div className="title">
          <h1>—— 附近商家 ——</h1>
        </div>
        <div className="shop">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
