export function PrintDetails(props){
    
        // if(props.login){
        //  return <h2>{props.UserName}</h2>
        // }
        // else{
        //     return <h2>Please login to enter</h2>
        // }
        const success=<h2>{props.UserName}</h2>
        const failure=<h2>Please login to enter</h2>
        return(props.login ? success : failure)

}