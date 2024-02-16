import useFetchAPI from "./FetchApi"

export default function UseEffect(){
    const [data, loading, error]=useFetchAPI('https://jsonplaceholder.typicode.com/todos/1');
    const [dat, load, err]=useFetchAPI('https://jsonplaceholder.typicode.com/todos/2');
    if(load) return <h1>Loading...</h1>
    if(err)console.log(err)

    if(loading) return <h1>Loading...</h1>
    if(error)console.log(error)
    return(
        <>
        {console.log(data)}
        {console.log(dat)}
       
        <p>Id <b>{data.id}</b> and the tittle is'<b>{data.title}</b>'</p>
        <p>Id <b>{dat.id}</b> and the tittle is'<b>{dat.title}</b>'</p>
        </>
        
    )
}