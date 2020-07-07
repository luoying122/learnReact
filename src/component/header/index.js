import React from "react";
import "./index.scss";
import { Button } from "antd"; // antd 组件
import logo from "../../assets/img/logo.jpg"; // logo
import "antd/dist/antd.min.css"; // antd样式
import { withRouter } from "react-router-dom";
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
      headStyle: {width: '1000px',margin: '0 auto'} 
    };
  }

  

  
  // 生命周期
  componentDidMount() {
    console.log(this.props);
    const location = this.props.location;
    this.setState({
      pathname:
        location.pathname === "/" ? "home" : location.pathname.substring(1),
    });

    window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    let clientW = document.documentElement.clientWidth;
    this.handleClientW(clientW,1040);
  }

  // 监听到页面宽度变化
  handleClientW = (w,num) =>{
    let str = '';
    str = w > num ? {width: '1000px',margin: '0 auto'} : {width: '90%',margin: '0 5%'}
    this.setState({
      headStyle: str
    })
  }

  // 页面加载监听到页面宽度
  handleResize = (e)=> {
    this.handleClientW(e.target.innerWidth,1040)
  }


  // tab标签点击
  hadleTagClick = (e)=> {
    this.setState({
      pathname: e.pathname,
    });
    this.props.history.push({ pathname: e.path });
  }

  render() {
    return (
      <div className="head" style={this.state.headStyle}>
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
