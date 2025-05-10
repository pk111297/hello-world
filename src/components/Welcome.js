import React, {Component} from "react";

class Welcome extends Component{

    render(){
        return <h1>Welcome {this.props.name} with Batting Style as {this.props.battingStyle}</h1>
    }
}

export default Welcome