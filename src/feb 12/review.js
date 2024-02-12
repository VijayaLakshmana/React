import { Component } from "react"
export default class Display extends Component{
constructor(props)
{
    super(props);
    this.state={value:'class'}
    this.onChange=this.onChange.bind(this)

}
onChange(e){
    this.setState({value:e.target.value})
}


render(){
    return(
        <>
        <input type="text" value={this.state.value} onChange={(e)=>this.onChange(e)}/>
        <h1>{this.state.value}</h1>
        </>
    )
}

}