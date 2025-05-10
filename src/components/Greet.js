import React from "react";

// function Greet(){
//     return <h1>Hello Pratik</h1>
// }

const Greet = (props) => { 
console.log(props);
return (
    <div>
    <h1>Hello {props.name} from arrow function and with Batting Style as {props.battingStyle}</h1>
    {props.children}
    </div>
)
}

export default Greet;