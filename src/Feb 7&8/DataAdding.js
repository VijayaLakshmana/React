import {Print} from "./Props"
export function PrintValue(){
 return(
   <>
    <Print Name="vijay" age='32' EmployeeStatus={true}/><br></br>
    <Print Name="Ram" age={22} EmployeeStatus={false}/><br></br>
    <Print Name="Siva" age={21} EmployeeStatus={true}/><br></br>
    <Print age={25}/>
    </>
 )
}
