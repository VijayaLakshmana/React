import { createContext, useState } from "react";
import { useContext } from "react";
const nextValue=createContext("vj")
export default function Context(){
    const [Value,setValue]=useState(0)
    return(
        <>
      <h1>{Value}</h1>  
     
    <nextValue.Provider value={()=>setValue(Value+1)} >
     <Child/>
    </nextValue.Provider></>
    )
}
function Child(){
    return(
        <>
       
        <h1>hello</h1>
        <Child1/>
        </>
    )
}
function Child1(){
    const name=useContext(nextValue)
    return(
        <>
       < button onClick={name}>Click</button>
        <h1>hello i am {name}</h1>
        </>
    )
}