# learnReact

学习 react 帖 记录下

> 为了加快学习 react 入门，所以就采用了 react 提供的 create-react-app 指令直接创建出项目

> 基础之前大概看过，这个帖子的话就决定从项目上入手

> 这个项目周期应该会长点，只能在业余时间去慢慢学习，沉淀。

> 这个项目以博客为主，开发自己的开源项目的话，个人博客也不错。预期功能，先以展示自己的文章为主吧。【最终功能是所有人都能在此网站上发布文章，查看，删除，点赞，分享】
> 其中登录是首要功能，不过还不会在远程服务器部署，而且需要个人域名，现在还有点懵逼，不太清楚主要流程。

> 所以就边学边做，先开发出前端静态页面，然后再着手服务端开发，服务端的话看看 node 行不行，node+express+mysql 还算熟悉点，[mogondb 也可以]

### firstDay

> create-react-app 已经搭建好项目了，name: react-app

> 先搞定路由的问题，毕竟页面跳转必要的。

> src-> [mkdir router -> router.js] src -> [mkdir home->home.js mkdir article->article]

```js
配置路由 暂时先这样配置路由文件之后再做具体的优化
import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "../page/home/home.js";
import Articles from "../page/article/article.js";

class RouteMap extends React.Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/article" exact component={Articles}></Route>
          </Switch>
        </main>
      </HashRouter>
    )
  }
}

export default RouteMap;

//关于switch 好像不能不写，因为会出现同样的路由的话，会出现问题，
// Redirect 默认展示某一个页面
// Switch 一旦找到 路由 就停止 不会在往下找了
// 用了这个配置以后，有锚点，不太好看，之后要做一定的优化处理
```

> 增加页面的跳转按钮，暂时是页面内的跳转。之后再增加一个公共头部，头部点击跳转 【跳转查阅资料：Link 标签】

```js
home/home.js

import React from 'React'
import Link from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home">返回home页面</Link>
      <div>
    )
  }
  return
}
```

> 最后页面成功跳转，初步的算是完成了。第二天开始就可以设计页面的大体构造以及开发了。然后页面的话 会仿照 简书，这个网站的页面还是挺优美的。然后代码都上传到 github 上了

### 2020-07-06

> 问题 1: 页面点击事件 要写成闭包形式'

```js
//bad  会自动触发点击事件，即不加()=>  后面相当于变量，无法指定点击里面是function
<span
  onClick={this.hadleTagClick(item)}
>
  hi
</span>
//good
<span
  onClick={() => this.hadleTagClick(item)}
>
  hi
</span>
```

> props 有点深入，导航栏的页面一直获取到的是空值{},但是在其他页面却可以获取到，暂时还没解决，只能先记下来 

> 路由跳转
```js
1.获取路由 this.props.location.pathname
2.进行路由跳转 this.props.history.push({pathname :"/meet"})
3.获取动态路由参数 this.props.match.params.users

路由传参 this.props.history.push({pathname :"/device/list",query:{data:item})

接收路由传过去的参数 const {data}=this.props.location.query;
```

> 插槽 react没有vue的slot功能，但是有this.props.children。功能相当于 slot
> withRouter 本项目的头部一开始是获取不到props的。
```js
props默认是 {location,match,history}
父传子 会有 父组件传的参数
利用withRouter可以实现实时获取路由参数
但是需要注意：
withRouter的页面必须再 route标签对里面
因此 本项目对 router.js做了改造，只是封装路由数据，其他的跳转等都拉到app.js了
// import { withRouter } from 'react-route-dom'
```

> 首页模拟数据完成  之后做登录相关，期望实现微信扫一扫登录，github授权登录
