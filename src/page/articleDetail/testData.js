export const articleDe = {
  code: 0,
  message: "操作成功 ！",
  data: {
    views: 403, likes: 0, commentsNum: 3,
    keyword: ["前端路由", "浏览器", "前进", "后退"],
    desc: "如果要你实现一个前端路由，应该如何实现浏览器的前进与后退 ？",
    numbers: "8207",
    img_url:
      "https://upload-images.jianshu.io/upload_images/12890819-7e433a16fc42b8af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    type: 1,
    state: 1,
    origin: 0,
    tags: [
      {
        _id: "5bf013a6bc1e7805eb83db97",
        name: "javaScript",
        desc: "javaScript",
        create_time: "2018-11-17T13:12:06.234Z",
        update_time: "2018-11-17T13:12:06.234Z",
        id: 1,
        __v: 0,
      },
      {
        _id: "5cf37d2874289f3d47ed1468",
        name: "数据结构与算法",
        desc: "数据结构与算法",
        create_time: "2019-06-02T07:39:20.849Z",
        update_time: "2019-06-02T07:39:20.849Z",
        id: 23,
        __v: 0,
      },
    ],
    comments: [
      {
        user: {
          name: "anncwb",
          type: 2,
          avatar: "https://avatars2.githubusercontent.com/u/28132598?v=4",
          user_id: "5d09d8e87d16a769d4bdf3f6",
        },
        is_top: false,
        likes: 0,
        state: 1,
        is_handle: 1,
        _id: "5d09d8ed7d16a769d4bdf3f7",
        article_id: "5cfccfbf8090bd3c84138a09",
        content: "123",
        user_id: "5d09d8e87d16a769d4bdf3f6",
        other_comments: [],
        create_time: "2019-06-19T06:40:45.693Z",
        update_time: "2019-06-19T06:40:45.693Z",
        id: 107,
        __v: 0,
      },
      {
        user: {
          name: "anncwb",
          type: 2,
          avatar: "https://avatars2.githubusercontent.com/u/28132598?v=4",
          user_id: "5d09d8e87d16a769d4bdf3f6",
        },
        is_top: false,
        likes: 0,
        state: 1,
        is_handle: 1,
        _id: "5d09d8f27d16a769d4bdf3f8",
        article_id: "5cfccfbf8090bd3c84138a09",
        content: "123",
        user_id: "5d09d8e87d16a769d4bdf3f6",
        other_comments: [],
        create_time: "2019-06-19T06:40:50.732Z",
        update_time: "2019-06-19T06:40:50.732Z",
        id: 108,
        __v: 0,
      },
      {
        user: {
          name: "123",
          type: 1,
          avatar: "user",
          user_id: "5eb5fc51f51b5508377c4f01",
        },
        is_top: false,
        likes: 0,
        state: 1,
        is_handle: 1,
        _id: "5eb65dd0f51b5508377c4f03",
        article_id: "5cfccfbf8090bd3c84138a09",
        content: "1111",
        user_id: "5eb5fc51f51b5508377c4f01",
        other_comments: [],
        create_time: "2020-05-09T07:37:52.248Z",
        update_time: "2020-05-09T07:37:52.248Z",
        id: 267,
        __v: 0,
      },
    ],
    category: [
      {
        desc: "浏览器",
        _id: "5bf4b91f245730373274df5e",
        name: "浏览器",
        create_time: "2018-11-21T01:47:11.434Z",
        update_time: "2018-11-21T01:47:11.434Z",
        id: 6,
        __v: 0,
      },
      {
        desc: "javaScript",
        _id: "5bf014e8bc1e7805eb83dba7",
        name: "javaScript",
        create_time: "2018-11-17T13:17:28.907Z",
        update_time: "2018-11-17T13:17:28.907Z",
        id: 1,
        __v: 0,
      },
    ],
    _id: "5cfccfbf8090bd3c84138a09",
    title: "实现一个前端路由，如何实现浏览器的前进与后退 ？",
    author: "biaochenxuying",
    content:
      "![](https://upload-images.jianshu.io/upload_images/12890819-7e433a16fc42b8af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n## 1. 需求\n\n如果要你实现一个前端路由，应该如何实现浏览器的前进与后退 ？\n\n## 2. 问题\n\n首先浏览器中主要有这几个限制，让前端不能随意的操作浏览器的浏览纪录：\n\n- 没有提供监听前进后退的事件。\n- 不允许开发者读取浏览纪录，也就是 js 读取不了浏览纪录。\n- 用户可以手动输入地址，或使用浏览器提供的前进后退来改变 url。\n\n所以要实现一个自定义路由，解决方案是**自己维护一份路由历史的记录**，从而区分 前进、刷新、回退。\n\n下面介绍具体的方法。\n\n## 3. 方法\n\n目前笔者知道的方法有两种，一种是 **在数组后面进行增加与删除**，另外一种是 **利用栈的后进先出原理**。\n\n### 3.1 在数组最后进行 增加与删除\n\n通过监听路由的变化事件 hashchange，与路由的第一次加载事件 load ，判断如下情况：\n\n- url 存在于浏览记录中即为后退，后退时，把当前路由后面的浏览记录删除。\n- url 不存在于浏览记录中即为前进，前进时，往数组里面 push 当前的路由。\n- url 在浏览记录的末端即为刷新，刷新时，不对路由数组做任何操作。\n\n另外，应用的路由路径中可能允许相同的路由出现多次（例如 A -> B -> A），所以给每个路由添加一个 key 值来区分相同路由的不同实例。\n\n> 注意：这个浏览记录需要存储在 sessionStorage 中，这样用户刷新后浏览记录也可以恢复。\n\n笔者之前实现的 用原生 js 实现的轻量级路由 ，就是用这种方法实现的，具体代码如下：\n\n```\n// 路由构造函数\nfunction Router() {\n        this.routes = {}; //保存注册的所有路由\n        this.routerViewId = \"#routerView\"; // 路由挂载点 \n        this.stackPages = true; // 多级页面缓存\n        this.history = []; // 路由历史\n}\n\nRouter.prototype = {\n        init: function(config) {\n            var self = this;\n            //页面首次加载 匹配路由\n            window.addEventListener('load', function(event) {\n                // console.log('load', event);\n                self.historyChange(event)\n            }, false)\n\n            //路由切换\n            window.addEventListener('hashchange', function(event) {\n                // console.log('hashchange', event);\n                self.historyChange(event)\n            }, false)\n\n        },\n        // 路由历史纪录变化\n        historyChange: function(event) {\n            var currentHash = util.getParamsUrl();\n            var nameStr = \"router-history\"\n            this.history = window.sessionStorage[nameStr] ? JSON.parse(window.sessionStorage[nameStr]) : []\n\n            var back = false, // 后退\n                refresh = false, // 刷新\n                forward = false, // 前进\n                index = 0,\n                len = this.history.length;\n\n            // 比较当前路由的状态，得出是后退、前进、刷新的状态。\n            for (var i = 0; i < len; i++) {\n                var h = this.history[i];\n                if (h.hash === currentHash.path && h.key === currentHash.query.key) {\n                    index = i\n                    if (i === len - 1) {\n                        refresh = true\n                    } else {\n                        back = true\n                    }\n                    break;\n                } else {\n                    forward = true\n                }\n            }\n            if (back) {\n                 // 后退，把历史纪录的最后一项删除\n                this.historyFlag = 'back'\n                this.history.length = index + 1\n            } else if (refresh) {\n                 // 刷新，不做其他操作\n                this.historyFlag = 'refresh'\n            } else {\n                // 前进，添加一条历史纪录\n                this.historyFlag = 'forward'\n                var item = {\n                    key: currentHash.query.key,\n                    hash: currentHash.path,\n                    query: currentHash.query\n                }\n                this.history.push(item)\n            }\n            // 如果不需要页面缓存功能，每次都是刷新操作\n            if (!this.stackPages) {\n                this.historyFlag = 'forward'\n            }\n            window.sessionStorage[nameStr] = JSON.stringify(this.history)\n        },\n    }\n```\n以上代码只列出本次文章相关的内容，完整的内容请看 [原生 js 实现的轻量级路由，且页面跳转间有缓存功能](https://github.com/biaochenxuying/route)。\n\n\n### 3.2 利用栈的 后进者先出，先进者后出 原理\n\n在说第二个方法之前，先来弄明白栈的定义与后进者先出，先进者后出原理。\n\n#### 3.2.1 定义\n\n栈的特点：**后进者先出，先进者后出**。\n\n举一个生活中的例子说明：就是一摞叠在一起的盘子。我们平时放盘子的时候，都是从下往上一个一个放；取的时候，我们也是从上往下一个一个地依次取，不能从中间任意抽出。\n\n![](https://upload-images.jianshu.io/upload_images/12890819-413301cfd2a4e4f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n\n因为栈的后进者先出，先进者后出的特点，所以只能栈一端进行插入和删除操作。这也和第一个方法的原理有异曲同工之妙。\n\n下面用 JavaScript 来实现一个顺序栈：\n\n```\n// 基于数组实现的顺序栈\nclass ArrayStack {\n  constructor(n) {\n      this.items = [];  // 数组\n      this.count = 0;   // 栈中元素个数\n      this.n = n;       // 栈的大小\n  }\n\n  // 入栈操作\n  push(item) {\n    // 数组空间不够了，直接返回 false，入栈失败。\n    if (this.count === this.n) return false;\n    // 将 item 放到下标为 count 的位置，并且 count 加一\n    this.items[this.count] = item;\n    ++this.count;\n    return true;\n  }\n  \n  // 出栈操作\n  pop() {\n    // 栈为空，则直接返回 null\n    if (this.count == 0) return null;\n    // 返回下标为 count-1 的数组元素，并且栈中元素个数 count 减一\n    let tmp = items[this.count-1];\n    --this.count;\n    return tmp;\n  }\n}\n```\n其实 JavaScript 中，数组是自动扩容的，并不需要指定数组的大小，也就是栈的大小 n 可以不指定的。\n\n#### 3.2.2 应用\n\n栈的经典应用: **函数调用栈**\n\n操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成“栈”这种结构, 用来存储函数调用时的临时变量。每进入一个函数，就会将临时变量作为一个栈帧入栈，当被调用函数执行完成，返回之后，将这个函数对应的栈帧出栈。为了让你更好地理解，我们一块来看下这段代码的执行过程。\n\n```\nfunction add(x, y) {\n   let sum = 0;\n   sum = x + y;\n   return sum;\n}\n\nfunction main() {\n   let a = 1; \n   let ret = 0;\n   let res = 0;\n   ret = add(3, 5);\n   res = a + ret;\n   console.log(\"res: \", res);\n   reuturn 0;\n}\n\nmain();\n```\n\n上面代码也很简单，就是执行 main 函数求和，main 函数里面又调用了 add 函数，先调用的先进入栈。\n\n执行过程如下：\n\n![](https://upload-images.jianshu.io/upload_images/12890819-be680934463c0825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n#### 3.2.3 实现浏览器的前进、后退\n\n第二个方法就是：用两个栈实现浏览器的前进、后退功能。\n\n我们使用两个栈，X 和 Y，我们把首次浏览的页面依次压入栈 X，当点击后退按钮时，再依次从栈 X 中出栈，并将出栈的数据依次放入栈 Y。当我们点击前进按钮时，我们依次从栈 Y 中取出数据，放入栈 X 中。当栈 X 中没有数据时，那就说明没有页面可以继续后退浏览了。当栈 Y 中没有数据，那就说明没有页面可以点击前进按钮浏览了。\n\n比如你顺序查看了 a，b，c 三个页面，我们就依次把 a，b，c 压入栈，这个时候，两个栈的数据如下：\n\n![](https://upload-images.jianshu.io/upload_images/12890819-cd4645b68f51be94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n当你通过浏览器的后退按钮，从页面 c 后退到页面 a 之后，我们就依次把 c 和 b 从栈 X 中弹出，并且依次放入到栈 Y。这个时候，两个栈的数据就是这个样子：\n\n![](https://upload-images.jianshu.io/upload_images/12890819-296513c39f4af8ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n这个时候你又想看页面 b，于是你又点击前进按钮回到 b 页面，我们就把 b 再从栈 Y 中出栈，放入栈 X 中。此时两个栈的数据是这个样子：\n\n![](https://upload-images.jianshu.io/upload_images/12890819-aa39ec6d5076c7b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n这个时候，你通过页面 b 又跳转到新的页面 d 了，页面 c 就无法再通过前进、后退按钮重复查看了，所以需要清空栈 Y。此时两个栈的数据这个样子：\n\n![](https://upload-images.jianshu.io/upload_images/12890819-0418fdba69f10c3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n如果用代码来实现，会是怎样的呢 ？各位可以想一下。\n\n其实就是在第一个方法的代码里面， 添加多一份路由历史纪录的数组即可，对这两份历史纪录的操作如上面示例图所示即可，也就是对数组的增加和删除操作而已， 这里就不展开了。\n\n其中第二个方法与参考了 王争老师的 [数据结构与算法之美](https://time.geekbang.org/column/article/41222)。\n\n# 4. 最后 \n\n博客首更地址 ：[https://github.com/biaochenxuying/blog](https://github.com/biaochenxuying/blog)\n\n\n参考文章：[数据结构与算法之美](https://time.geekbang.org/column/article/41222)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    like_users: [],
    create_time: "2019-06-09T09:22:07.091Z",
    update_time: "2019-06-09T09:22:07.091Z",
    id: 53,
    __v: 0,
  },
};