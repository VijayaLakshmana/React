import { Component } from "react";
export default class DisplayTime extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
        console.log("constructor")
    }
    componentDidMount(){
        console.log("mount")
        this.timerID = setInterval(() => this.tick(),1000);
        console.log("mount1")
    }
    tick() { this.setState({date: new Date()});  console.log("function")  }
    render(){
        return(
            <div>
                <h1>hello</h1>
              
            <h1>{console.log("head")}</h1> 
            <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
