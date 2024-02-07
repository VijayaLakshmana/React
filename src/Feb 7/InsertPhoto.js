import insert from "./AddImage"
function DisplayImage({animal,size}){
    return(
        
        <img src={insert(animal)} alt={animal.name} width={size} height={size}/>
       
    )
}
export default function ShowImage(){
    return(
        <div>
        <DisplayImage animal={{
            name:"parrot",
            imageId1:1661179,
            imageId2:1661179
        }}
        size='100'
        />
         <DisplayImage animal={{
            name:"Tiger",
            imageId1:792381,
            imageId2:792381
        }}
        size={80}
        />
        </div>
    )
}
