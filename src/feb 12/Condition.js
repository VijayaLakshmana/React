import { Component } from "react";
export default class Condition extends Component{
    constructor(props){
        super(props);
        // this.loggedInClick = this.loggedInClick.bind(this);
        // this.loggedOutClick= this.loggedOutClick.bind(this);
        this.state={isLoggedIn:false}
    }
    loggedInClick(){
        this.setState({isLoggedIn:true})
    }
    loggedOutClick(){
        this.setState({isLoggedIn:false})
    }
    //storm
    render(){
        const loggedIn=this.state.isLoggedIn;
        let Button;
        if(loggedIn)
        {
            Button=<LogOutButton onClick={()=>this.loggedOutClick()}/>
        }
        else{
            Button=<LogInButton onClick={()=>this.loggedInClick()}/>
        }

        return(
            <>
           <Greeting isLoggedIn={loggedIn}/>
           {Button}
            </>
        )
    }

}

function LogInGreeting(){
    return <h1>hello welcome</h1>
}
function LogOutGreeting(){
    return <h1>please login</h1>
}
function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn)
  {
    return <LogInGreeting/>
  }
  else{
    return <LogOutGreeting/>
  }
}
function LogOutButton(props){
    return(
    <button onClick={props.onClick}>logOut</button>
    )
}
function LogInButton(props){
    return(
    <button onClick={props.onClick}>logIn</button>
    )
}