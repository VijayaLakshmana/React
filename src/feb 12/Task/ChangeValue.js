import { Component } from "react";
 
export default class ChangeValue extends Component{
    constructor(props){
        super(props)
        this.state={value:1}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({value:this.state.value+1})
    }
    render(){
        return(<>
        <h1>
            {this.state.value}
        </h1>
         <Base onClick={this.handleClick}/>
        </>)
    }
}
class Base extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<button onClick={this.props.onClick}>Click to change value</button>)
    }
}