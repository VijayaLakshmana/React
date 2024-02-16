import { forwardRef } from "react"
const Video=forwardRef((props,ref)=>{
    return <video src={props.src} type={props.type} ref={ref}/>

})
export default Video;