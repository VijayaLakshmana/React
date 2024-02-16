import { Component } from "react";
export default class Button extends Component{
    constructor(props)
    {
        super(props)
        this.state={rndcol:true}
        this.changeColor=this.changeColor.bind(this)
    }
     
    changeColor(e){
           
        {this.state.rndcol?e.target.style.backgroundColor='blue':e.target.style.backgroundColor='black'};
           this.setState({rndcol:!this.state.rndcol})
    }
    // changeColor(e){
    //     function random(number) {
    //         return Math.floor(Math.random() * (number + 1));
    //       }
    //     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    //        e.target.style.backgroundColor=rndCol;
    // }


    render(){
        return(
            <>

            < button onClick={(e)=>this.changeColor(e)}>Click to changeColor</button>
            </>
        )
    }

}
