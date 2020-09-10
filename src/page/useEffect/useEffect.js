import React, { useState, useEffect } from 'react';

function UseE() {
    const [count, setCount] = useState(0);

    /** will work when count state has changed */ 
    useEffect(() => {
        console.log(`You clicked ${count} times`);
    },[count]);

    /** will work offen */ 
    // useEffect(() => {
    //     console.log(`You clicked ${count} times`);
    // });

    /** only work when component has mounted success */ 

    // useEffect(() => {
    //     console.log(`You clicked ${count} times`);
    // },[]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export default UseE;