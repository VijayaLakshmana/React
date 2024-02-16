import { createContext } from "react";
import { useContext } from "react";
const nextValue=createContext()
export default function Context(){
    return(
    <nextValue.Provider value={{name:"vijay"}}>
     <Child/>
    </nextValue.Provider>
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
        <h1>hello i am {name.name}</h1>
        </>
    )
}