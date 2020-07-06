import React from "react";
import "./index.scss";
import Header from "../header/index";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
