import React from "react";
import "./home.scss";
import { testData } from "./testData";
import { formatTime } from '../../utils/index';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // 组件渲染获取数据
  componentDidMount() {
    console.log(window.location.search)
    this.setState({
      articles: testData,
    });
  }

  // 跳转详情
  getArticleDetail(art) {
    this.props.history.push({
      pathname: '/article/detail/' + art.id
    })
  }

  render() {
    return (
      <div className="home_page">
        {/* 这是主页页面,暂时只展示内容，频道先不增加 */}
        <div className="home_list">
          {this.state.articles.map((item, index) => {
            return (
              <div className="home_item" key={index} onClick={()=>this.getArticleDetail(item)}>
                <div className="left">
                  <p>{item.title}</p>
                  <p>{item.content}</p>
                  <p>
                    <span>查看</span>
                    <span>评论{item.commentNum}</span>
                    <span>点赞{item.upNum}</span>
                    <span>{formatTime(item.createTime)}</span>
                  </p>
                </div>
                <img src={item.headImg} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// 模拟数据 先用 图灵联邦 网站的数据
// https://api.turingtopia.com/tllbManagement/feed/getNewInfo?channel=recommend&type=recommend&pageNo=1&sort=hottest
export default Home;
