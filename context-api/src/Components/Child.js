import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import counterContext from './CounterContext';


const Child = (props) => {

    let counterValue = useContext(counterContext);
    return (
        <div>
            <h1>This is first Child And name is :{props.name} Using Counter Context</h1>
            <h3>Counter Value : {counterValue[0]}</h3>
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Increment</button>

        </div>
    )
}

export default Child
