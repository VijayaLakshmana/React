// import { useState } from "react";
// import { useState } from "react";
import useUserField from "./CustomHook1";
export default function UserInputs(){
    const nameProps=useUserField('name')
    const ageProps=useUserField('age')
  
    return(
        <>
        
        <p> UserName:<input  {...nameProps}/>  </p>
        <p>  UserAge:<input  {...ageProps}/> </p>
        <p>I am <b>{nameProps.value}</b> and age is <b>{ageProps.value}</b></p>
        
        
        </>
    )
}


// ex:
// function UserInputs(){
//     const[value, setValue]=useState('')
//     const[age, setAge]=useState('')
//     function changeValue(e){
//       setValue=(e.target.value)
//     }
//     function changeValue(e){
//         setAge=(e.target.value)
//       }

//     return(
//         <>
//         <p>username:<input type="text" value={value} onChange={changeValue}/></p>
//         <p>age:<input type="text" value={value} onChange={changeValue}/></p>
//         <p>{value} {age}</p>

//         </>
//     )
// }