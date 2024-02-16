export function DisplayAnimals({AnimalName}){
    if(AnimalName==='Bike'){
        throw new Error('It is not a Animal')
    }
    return(
   
        <>
       
            <h1>{AnimalName}</h1>
        
        
        </>
    )

}