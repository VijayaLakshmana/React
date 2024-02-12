import propTypes from "prop-types"
export function Print(rops){
    return(
        <div>
            <p>name:{rops.Name}</p>
            <p>age:{rops.age} </p>
            <p>EmployeeStatus:{rops.EmployeeStatus ? " Yes" : " No"}</p>
        </div>
    )
}
Print.propTypes= {
    Name: propTypes.string,
    age: propTypes.number,
    EmployeeStatus: propTypes.bool

}
Print.defaultProps={
    Name:"vicky",
    age:0,
    EmployeeStatus:true
}