import { useState, useMemo } from "react";
import Product from "./Product";
export default function Callback(){
    const [value, setValue]=useState(["product 1","product 2"])
    const [count, setCount]=useState(0)
    const [cart, setCart]=useState(0)

    const addToCart=useMemo(()=>{
        
      return(()=>  setCart(cart + 1))
    },[cart])
    return(
        <>
         <h1>Count:{count}</h1> 
        <button onClick={()=>setCount(count+1)}>count++</button>
        <h2>Cart:{cart}</h2> 
        
        {value.map((p,i)=>{
            return <Product name={p} addToCart={addToCart} key={i}/>
        })}
        </>
    )
}