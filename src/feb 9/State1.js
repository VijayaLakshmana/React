import { useState } from "react";
export function Counter1(){
  
    const [count, setCount]=useState(0);
    return(
        <div>
            <h1>Counter.{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}