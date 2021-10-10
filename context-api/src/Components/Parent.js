import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = (props) => {
    return (
        <div>
            <Child name={props.name} />
            <Child2 />
            <h1>This is parent </h1>
        </div>
    )
}

export default Parent
