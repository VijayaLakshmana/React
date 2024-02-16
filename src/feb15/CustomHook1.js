import { useState } from "react";
export default function useUserField(initialValue){
    const [value, setValue]=useState(initialValue)

    function changeValue(e){
        setValue(e.target.value)
    }
    return{
        value: value,
        onChange: changeValue,
}

}