import { useEffect} from "react";
export default function Display1(){
    useEffect(()=>{
        console.log("start")
        const timerId=setInterval(()=>{
            console.log("sucess")

        },2000)

        return ()=>{
            console.log("finish")
            clearInterval(timerId)

        }

    })

    return(
        <>
        <p>helle guys</p>
        <hr/>
        </>
    )
}