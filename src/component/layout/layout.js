import React from "react";
import "./index.scss";
import Header from "../header/index";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getRoute.bind(this);
  }
  getRoute() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <Header />
        </div>
        {this.getRoute()}
        <div className="main">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
