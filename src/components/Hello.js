import React from "react";

// const Hello = () => {
//     return <div className = 'DummyClass'><h1>Hello Pratik Kanungo</h1></div>
// }

const Hello = () => {
    return React.createElement('div',{id: 'hello', className: 'DummyClass'},React.createElement('h1',null,"Hello Pratik Kanungo"))
}

export default Hello