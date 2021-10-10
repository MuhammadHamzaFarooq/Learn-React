import React, { useReducer } from 'react';
import reducer from './CounterReducer';



const Child2 = () => {
    let [state, dispatch] = useReducer(reducer, 11);
    return (
        <div>
            <h1>This is second child use Counter Reducer The value of state reduer is : {state}</h1>
            <button onClick={() => {
                dispatch('INCREMENT')
            }}>Increment Reducer</button>
            <button onClick={() => {
                dispatch('DECREMENT')
            }}>Decrement Reducer</button>
        </div>
    )
}

export default Child2
