import { useRef, useState } from "react";
import Video from "./Image";
export default function Ref(){
    const [play, setPlay]=useState(true)
const myRef=useRef(null)
const myVd=useRef(null)
function handleClick(){
    if(play)
    {

     myVd.current.play()
     setPlay(!play)
    }
    else{
        myVd.current.pause()
        setPlay(!play)

    }

}

return(
    <>
    <input type="text" ref={myRef}/>
    <button onClick={()=>myRef.current.focus()}>focus in</button>
    <button onClick={()=>myRef.current.blur()}>focus out</button>
    <button onClick={()=>myRef.current.value=''}>clear</button>
    <button onClick={handleClick}>{play?'play':'pause'}</button>
    <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" ref={myVd}/>
    </>
)
}