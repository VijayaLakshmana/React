
import UpdateComponent from "./Hoc";

function Person1({value,handleClick}){
 
    return(
        <>
        <h2>value1: {value}</h2>
        <button onClick={handleClick}>Increase count</button>
        </>
    )
}
export default UpdateComponent(Person1);