import React from "react";

const Product=React.memo(({name, addToCart})=>{
    console.log(`${name} product re-rendered`)
return(
    <>
    <h1>{name}</h1>
    <button onClick={addToCart}>Add to cart</button>
    </>
)
})
export default Product;