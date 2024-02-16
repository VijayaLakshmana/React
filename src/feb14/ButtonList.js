import { useState } from "react"
export default function Button(){
    const[message,setValue]=useState("")
    const[messag,setValu]=useState("")
    return(
    <>
    <select onChange={(e)=>setValue(e.target.value)}>
     <option value="bike">bike</option>
     <option value="car">car</option>
     <option value="bus">bus</option>
    </select>
    <input type="number" onChange={(e)=>setValu(e.target.value)} />
    <input type="file" accept=".pdf" required/>
    <button onClick={()=>alert(`${message} ${messag}`)} >Click to select</button>      
    </>
    )
}
