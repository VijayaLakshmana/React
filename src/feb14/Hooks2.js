import React, { useState, useEffect } from 'react';

export default function Display (){
    const[count, setCount]=useState(0);

    useEffect(()=>{
        let timerId;
        console.log('effect started')
       
           timerId= setInterval(()=>{
                console.log("get value")

            },2000)
       

        return()=>{
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            console.log("clean up started")
            clearInterval(timerId)
        }
    },[]
    )


    return(
        <>
        <p>hello</p>
        <button onClick={()=>setCount(count+1)}>Get value</button> <span>count is {count}</span>
    
        </>
    )
};
