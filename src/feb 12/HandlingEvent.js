import { Component } from "react";
export default class Toggle extends Component{
    constructor(props){
        super(props);
        this.state= {isToggleOn: true};
        // this.handleClick = this.handleClick.bind(this);
        console.log("hello4")
    }
    handleClick(){
        console.log("hello1")
        this.setState(e=>({
            isToggleOn: !e.isToggleOn 
        })) ;
    }
    render(){   
        return(
            <button onClick={()=>this.handleClick()}>
                {console.log("hello")}
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                {console.log("hello2")}
                </button>
        )
    }
}


  
  


