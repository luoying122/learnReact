import React from "react";
import "./index.scss";
import Header from "../header/index";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headStyle: { width: "1000px", margin: "0 auto" },
      scrollTop: 0,
      right: "10px",
    };
  }

  // 生命周期
  componentDidMount() {
    // 监听窗口变化
    window.addEventListener("resize", this.handleResize.bind(this)); //监听窗口大小改变
    let clientW = document.documentElement.clientWidth;
    this.handleClientW(clientW, 1040);
    // 监听滚动
    window.addEventListener("scroll", this.bindHandleScroll);
  }

  bindHandleScroll = (e) => {
    // 滚动的高度(兼容多种浏览器)
    const top =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0);
    this.setState({
      scrollTop: top,
    });
  };

  // 监听到页面宽度变化
  handleClientW = (w, num) => {
    let str = "";
    str =
      w > num
        ? { width: "1000px", margin: "0 auto" }
        : { width: "90%", margin: "0 5%" };
    let right = w > num ? "50px" : "10px";
    this.setState({
      headStyle: str,
      right: right,
    });
  };

  // 页面加载监听到页面宽度
  handleResize = (e) => {
    this.handleClientW(e.target.innerWidth, 1040);
  };

  // 回到顶部
  handleScrollTop = ()=> {
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="co" style={this.state.headStyle}>
            {this.props.children}
            <Button
              className="back_top"
              shape="circle"
              type="primary"
              size="large"
              icon={<ArrowUpOutlined />}
              onClick={()=>this.handleScrollTop()}
              style={{
                display: this.state.scrollTop > 500 ? "block" : "none",
                right: this.state.right,
              }}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
