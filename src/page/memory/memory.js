import React from "react";
import "./memory.scss";
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { CloseOutlined } from '@ant-design/icons';
// import { Progress } from 'antd';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      html: "",
      src: '',
      userName: '张默默',
      classList: [],
      qrurl: 'https://www.yinxiang.com/',
      wechat: ''
    };
  }

  // 组件渲染获取数据
  componentWillMount() {
    console.log(1)
    let au = window.location.href.split('auth=')[1];
    console.log(au)
    // alert(au)
    let _this = this;
    let url = `/getClass?authToken=${au}`
    axios.get(url).then(r => {
      let tclass = r.data.class;
      let tclassList = r.data.class_tags;
      let tarr = [];
      Object.keys(tclass).forEach(key => {

        tarr.push({
          className: key,
          classValue: tclass[key]
        })
      })
      // console.log(tarr)

      tarr = tarr.sort((a, b) => {
        return b.classValue - a.classValue
      })
      // console.log(tarr)
      let result = [];
      for (let i = 0; i < 5; i++) {
        let element = tarr[i];
        let o = {
          className: element.className,
          percent: Math.ceil(Math.random() * 50) + '%',
          tagList: tclassList[element.className].slice(0, 4)
        }
        result.push(o)
      }

      // console.log(result)
      // alert(result)

      _this.setState({
        classList: result
      })
    })

  }

  exportImage = () => {
    const newCanvas = document.createElement("canvas");
    const element = document.querySelector('.photo-page');
    let _this = this;

    const dom_width = parseInt(window.getComputedStyle(element).width);
    const dom_height = parseInt(window.getComputedStyle(element).height);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    newCanvas.width = dom_width * 2;
    newCanvas.height = dom_height * 2;
    newCanvas.style.width = dom_width + "px";
    newCanvas.style.height = dom_height + "px";
    const context = newCanvas.getContext("2d");
    context.scale(1.8, 1.8);

    html2canvas(element).then((canvas) => {
      const imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
      console.log(imgUri)
      _this.setState({
        src: imgUri
      })
    });
  }

  setSrc = () => {
    this.setState({
      src: ''
    })
  }

  setWechat = () => {
    this.setState({
      wechat: ''
    })
  }

  setWeSrc = () => {
    this.setState({
      wechat: `http://10.228.33.128:3000/#/appm?auth=${window.location.href.split('auth=')[1]}`
    })
  }
  render() {
    return (
      <div className="memory-page">
        {/* app */}
        <div className="photo-page">
          <div className="photo-avatar">
            <div className="i"></div>
            <div className="t">
              来自印象笔记AI分析，  <br />
              得出关于  <span>{this.state.userName}</span> 的印象
            </div>
          </div>
          <div className="photo-con">
            {this.state.classList.map((item, index) => {
              return (
                <div className="photo-tag" key={index} >
                  <div className="photo-left">
                    <div className="photo-le">
                    </div>
                  </div>
                  <div className="photo-taginfo">
                    <div className="info-title">{item.className}</div>
                    <div className="info-percent">{item.percent}的人也符合这个标签</div>
                    <div className="info-tag">
                      {item.tagList.map((t, ti) => {
                        return (
                          <span key={ti}>{t}</span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="photo-bottom">
            <div className="left">
              <QRCode
                value={this.state.qrurl}  //value参数为生成二维码的链接
                size={42} //二维码的宽高尺寸
                fgColor="#000000"  //二维码的颜色
              />
              <span>扫码下载印象笔记</span>
            </div>
            <div className="right">

            </div>
          </div>
        </div>

        {/* web */}
        <div className="memory-title">
          经过AI分析，得出了关于
    <span>{this.state.userName}</span>
         的印象
        </div>
        <div className="memory-con">
          <div className="memory-avatar">
            {this.state.classList.map((item, index) => {
              return (
                <div className="memory-tagcontent" key={index}>
                  <div className="memory-tagbg">
                  </div>
                  <div className="memory-taginfo">
                    <div className="info-title">{item.className}</div>
                    <div className="info-percent">{item.percent}的人也符合这个标签</div>
                    <div className="info-tag" >
                      {item.tagList.map((t, ti) => {
                        return (
                          <span key={ti}>{t}</span>
                        )
                      })}

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="memory-btn">
            <div className="save-photo" onClick={() => this.exportImage()}>
              <div className="img"></div>
              <span>保存到相册</span>

            </div>
            <div className="save-we" onClick={() => this.setWeSrc()}>
              <div className="img"></div>
              <span>分享到微信</span>
            </div>
          </div>
        </div>

        {/* img */}
        <div className="m-img">
          {this.state.src && (<span onClick={() => this.setSrc()}><CloseOutlined twoToneColor="#eb2f96" /></span>)}
          <img src={this.state.src} alt="" />
        </div>

        {/* wechat-qrcode */}
        {this.state.wechat && (
          <div className="wechat-qr">
            <span onClick={() => this.setWechat()}><CloseOutlined twoToneColor="#eb2f96" /></span>
            <QRCode
              value={this.state.wechat}  //value参数为生成二维码的链接
              size={160} //二维码的宽高尺寸
              fgColor="#000000"  //二维码的颜色
            />
          </div>
        )}

      </div >
    );
  }
}

// 模拟数据 先用 图灵联邦 网站的数据
// https://api.turingtopia.com/tllbManagement/feed/getNewInfo?channel=recommend&type=recommend&pageNo=1&sort=hottest
export default Home;
