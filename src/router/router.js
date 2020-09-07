import Home from "../page/home/home.js";
import Articles from "../page/article/article.js";
import ArticleDetail from "../page/articleDetail/articleDetail";
import Hackathon from "../page/hackathon/hack";
import Memory from "../page/memory/memory";
import Appm from '../page/appm/appm';
const config = [
  {
    path: "/",
    component: Hackathon,
    exact: true,
  },
  {
    path: "/articles",
    component: Articles,
    exact: true,
  },
  {
    path: "/article/detail/:value",
    component: ArticleDetail,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true
  },
  {
    path: '/memory',
    component: Memory,
    exact: true
  },
  {
    path: '/appm',
    component: Appm
  }
];

// class RouteMap extends React.Component {
//   render() {
//     return (
//       <HashRouter>
//         <main>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/home" exact component={Home} />
//             <Route path="/article" exact component={Articles}></Route>
//           </Switch>
//         </main>
//       </HashRouter>
//     )
//   }
// }

export default config;
