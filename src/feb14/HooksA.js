import { useState } from "react";
import Display1 from "./Hooks1";

export default function Cleanup(){
    const[toggle,setToggle]=useState(true)

    return(
        <>
        <p>useEffect with cleanup</p>
        <button onClick={()=>{setToggle(!toggle)}}>show/hide</button>
        {toggle ? <Display1/>:null}
        </>
    )
}