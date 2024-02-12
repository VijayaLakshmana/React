import { Component } from "react";
export default class Button extends Component{
    constructor(props)
    {
        super(props)

    }
     
    changeColor(e){
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
          }
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
           e.target.style.backgroundColor=rndCol;
    }


    render(){
        return(
            <>

            < button onClick={(e)=>this.changeColor(e)}>Click to changeColor</button>
            </>
        )
    }

}
