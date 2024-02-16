import UpdateComponent from "./Hoc"
 function Person2({value, handleClick}){
   
    return(
        <>
        <h2>value2: {value}</h2>
        <button onClick={handleClick}>Increase count</button>
        </>
    )
}
export default UpdateComponent(Person2)