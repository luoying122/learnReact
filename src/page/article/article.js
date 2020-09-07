import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
function Articles() {

  // }
  // class Articles extends React.Component {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`You clicked ${count} times`);
  //   }, 3000);
  // });

  useEffect(
    // Effect from first render
    () => {
      const id = setInterval(() => {
        setCount(0 + 1); // setCount(count + 1)
      }, 1000);
      return () => clearInterval(id);
    },
    [count] // [count]
  );


  // render() {
  // return (
  //   <div>
  //     <Link to="/home">返回home页面</Link>
  //   </div>
  // );

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>
        Click me
        </button> */}
    </div>
  );
  // }
}

export default Articles;
