import React from "react";
import "./hack.scss";
// import { testData } from "./testData";
import axios from 'axios';
// 引入 ECharts 主模块
import echarts from 'echarts';
import html2canvas from 'html2canvas';
import { Button } from 'antd';
// import { formatTime } from '../../utils/index';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      html: ""
    };
  }

  // 组件渲染获取数据
  componentDidMount() {
    // console.log(window.location)
    let au = window.location.href.split('auth=')[1];
    // console.log(au)
    // let _this = this;
    let url = `/getClass?authToken=${au}`
    axios.get(url).then(r => {
      // console.log(r)
      let html = r.data.htmlcontent;
      // console.log(html)
      if (html.indexOf('window.addEventListener') !== -1) {
        html = html.substring(0, html.indexOf('window.addEventListener'));
      }

      // console.log(html)

      let t = html.substring(html.indexOf('option_') - 4, html.lastIndexOf('chart_'));
      // console.log(t)
      let res = t.substring(t.indexOf('=') + 1, t.lastIndexOf(';'));
      let options = JSON.parse(res);
      // console.log(options)
      var myChart = echarts.init(document.getElementById('216d39f10b324fa2b8e8bf14e220cd55'));
      myChart.setOption(options);


      localStorage.setItem('tclass', JSON.stringify(r.data.class))
      localStorage.setItem('tclassList', JSON.stringify(r.data.class_tags))
    })
  }

  exportImage = () => {
    const newCanvas = document.createElement("canvas");
    const element = document.querySelector('.ant-table');

    const dom_width = parseInt(window.getComputedStyle(element).width);
    const dom_height = parseInt(window.getComputedStyle(element).height);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    newCanvas.width = dom_width * 2;
    newCanvas.height = dom_height * 2;
    newCanvas.style.width = dom_width + "px";
    newCanvas.style.height = dom_height + "px";
    const context = newCanvas.getContext("2d");
    context.scale(1.8, 1.8);

    html2canvas(element, { canvas: newCanvas }).then((canvas) => {
      // const imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
    });
  }

  // 跳转详情
  getArticleDetail(art) {
    this.props.history.push({
      pathname: '/article/detail/' + art.id
    })
  }

  generateCard() {
    let a = window.location.href.split('auth=')[1];
    this.props.history.push(`/memory?auth=${a}`)
  }

  render() {
    return (
      <div className="home_page">
        {/* <div className="content" dangerouslySetInnerHTML={{ __html: this.state.html }}></div> */}
        <div id="216d39f10b324fa2b8e8bf14e220cd55" className="chart-container"></div>

        <Button type="primary" block className="bt-p" onClick={()=> this.generateCard()}>
          生成个人卡片
    </Button>

      </div>
    );
  }
}

// 模拟数据 先用 图灵联邦 网站的数据
// https://api.turingtopia.com/tllbManagement/feed/getNewInfo?channel=recommend&type=recommend&pageNo=1&sort=hottest
export default Home;
