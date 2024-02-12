import { Component } from "react";
 
export default class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state={value:1,add:1};
        console.log("Constructor");
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log("Mount");
    }
    componentWillUnmount(){
        console.log("Unmount");
    }
    componentDidUpdate(){
        console.log("update");
    }
    shouldComponentUpdate(){
        console.log("should");
        return true;
       
    }
    handleClick(){
        this.setState({value:this.state.value+1})
    }
    render(){
        console.log("render");
        return(<>
        <h1></h1>
        <button onClick={this.handleClick}>Click {this.state.value}</button>
        </>)
    }
}