import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.getRoute.bind(this)
//   }
getRoute() {
    console.log(this.props)
}

  render() {
    return (
      <div>
          {this.getRoute()}
        <Link to="/article">去往article页面</Link>
      </div>
    );
  }
}

export default Home;
