import Home from "../page/home/home.js";
import Articles from "../page/article/article.js";
import ArticleDetail from "../page/articleDetail/articleDetail";

const config = [
  {
    path: "/",
    component: Home,
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
