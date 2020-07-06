import React from "react";
import "./index.scss";
import { Button } from "antd"; // antd 组件
import logo from "../../assets/img/logo.jpg"; // logo
import "antd/dist/antd.min.css"; // antd样式
import { withRouter } from 'react-router-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: "home",
      tag: [
        {
          value: "首页",
          path: "/",
          pathname: "home",
        },
        {
          value: "文章",
          path: "/articles",
          pathname: "articles",
        },
      ],
    };
  }

  // 生命周期
  componentDidMount() {
    console.log(this.props)
    const location = this.props.location;
    this.setState(
      {
        pathname: location.pathname === '/' ? 'home' : location.pathname.substring(1)
      }
    )
  }

  hadleTagClick(e) {
    console.log(this.props)
    this.setState({
      pathname: e.pathname,
    });
    this.props.history.push({pathname: e.path})
  }

  render() {
    return (
      <div className="head">
        <div className="left">
          <img src={logo} alt="" />
          <div className="tag_list">
            {this.state.tag.map((item, index) => {
              return (
                
                <span
                  className={
                    this.state.pathname === item.pathname ? "active" : ""
                  }
                  onClick={() => this.hadleTagClick(item)}
                  key={index}
                >
                  {item.value}
                </span>
              );
            })}
          </div>
        </div>
        <div className="right">
          <Button>登录</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
