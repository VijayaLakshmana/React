import { useState } from "react";
export default function UpdateComponent(OrignalComponent){
    function NewComponent(){
        const[value, setValue]=useState(1)
        function handleClick(){
           console.log('inside');
             setValue(value*2)   
        };
        return <OrignalComponent handleClick={handleClick} value={value}/>
    }
    return NewComponent;
}