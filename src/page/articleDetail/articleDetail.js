import React from "react";
//模拟数据
import { articleDe, commentRes } from "./testData";
import logo from "../../assets/img/logo.jpg";
import "./detail.scss";
import { formatTime } from "../../utils/index";
//输入框≈≈≈≈
import { Input, Button } from "antd";
import Comment from '../../component/comment/comment';

const { TextArea } = Input;
class articleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      comments: []
    };
  }
  // 组件渲染获取数据
  componentWillMount() {
    console.log(this.props.match.params.value); // 动态路由参数
    // let article_id = this.props.match.params.value
    // 获取数据    // 模拟数据
    this.setState({
      article: articleDe.data,
      comments: commentRes
    });
  }

  getArticleHtml() {
    let art = this.state.article;
    let html = { __html: art.content };
    return (
      <div className="detail_page">
        <div className="title">{art.title}</div>
        <div className="author">
          <img src={logo} alt="" />
          <div className="info">
            <p className="name">{art.author}</p>
            <p>
              <span>查看{" " + art.views}</span>
              <span>创建于{" " + formatTime(art.create_time)}</span>
              <span>评论{" " + art.commentsNum}</span>
              <span>点赞{" " + art.likes}</span>
            </p>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={html}></div>
        <div className="comment_text">
          <TextArea rows={4} placeholder="既然来了,不如写点什么再走吧" />
          <Button className="send" type="primary">发布</Button>
        </div>
        <Comment />
      </div>
    );
  }

  noHtmlData() {
    return <div className="no_data">没有数据哦</div>;
  }

  render() {
    return (
      <div>
        {this.state.article ? this.getArticleHtml() : this.noHtmlData()}
      </div>
    );
  }
}

// 模拟数据 先用 图灵联邦 网站的数据
// https://api.turingtopia.com/tllbManagement/feed/getNewInfo?channel=recommend&type=recommend&pageNo=1&sort=hottest
export default articleDetail;
