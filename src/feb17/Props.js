import PropdType from 'prop-types';



export function Print(props){
    return(
        <div>
            <p>name:{props.Name}</p>
            <p>age:{props.age} </p>
            <p>EmployeeStatus:{props.EmployeeStatus ? " Yes" : " No"}</p>
        </div>
    )
}
Print.propTypes= { 
    Name: PropdType.string,
    age: PropdType.number,
    EmployeeStatus: PropdType.bool

}
Print.defaultProps={
    Name:"vicky",
    age:0,
    EmployeeStatus:false
}