export default function Display(){
    return(
        <>
        <h1>{SportDetail.printValue}</h1>
        <img src={image} alt="game" className="photo"/>
        <ul style={SportDetail.theme}>
            <li>Soccer</li>
            <li>Baseball</li>
            <li>Hockey</li>
            <li>rugby</li>
        </ul>
        </>
    );
}
const SportDetail={
    printValue:"sports",
    theme:{
        backgroundColor:'black',
        color: 'pink'
    }
}
const image="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg"