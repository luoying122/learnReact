import React from "react";
import {Link} from 'react-router-dom'
class Articles extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home">返回home页面</Link>
      </div>
    );
  }
}

export default Articles;
