import { useState } from "react";

export default function LiftUp (){
    const[text,setText]=useState('')
    function handleChange(e){
        setText(e.target.value)
    }
    return(
        <>
          <Input  name="First Value" value={text} onChange={handleChange}/>
          <Input  name="Second Value" value={text} onChange={handleChange}/>
       
        </>
    )
}
function Input(props){
    return(
        <>
        <label>{props.name} <input value={props.value} onChange={props.onChange}/></label>
        </>
    )

}

