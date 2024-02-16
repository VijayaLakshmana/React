import { useState } from "react"
import { useEffect } from "react"
export default function useFetchAPI(url){
    
    const [data, setData]=useState({})
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)
    
    useEffect(()=>{
        setLoading(true)
       fetch(url)
      .then((response)=>
       response.json())
        .then((datas)=>setData(datas))
       .catch((err)=>{
        setError(err)
       })
       .finally(()=>setLoading(false))
      
     },[url]);
    return [data, loading, error ]
        
  
}