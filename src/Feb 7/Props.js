export function Print(rops){
    return(
        <div>
            <p>name:{rops.Name}</p>
            <p>age:{rops.age} </p>
            <p>EmployeeStatus:{rops.EmployeeStatus ? " Yes" : " No"}</p>
        </div>
    )

}