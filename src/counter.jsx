import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    function handleCount(){
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter {props.id}</h2>
            <p>Count: {count}</p>
            <button onClick={handleCount}></button>
        </div>
    );
}

export default Counter;