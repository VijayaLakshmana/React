import { DisplayAnimals } from "./Display";
import { Component } from "react";
import ErrorBoundary from "./Error";
export default class App extends Component{
  render(){
    return(
    <>
         
        <DisplayAnimals AnimalName="cat"></DisplayAnimals>
        <DisplayAnimals AnimalName="dog"></DisplayAnimals>
        <ErrorBoundary>
        <DisplayAnimals AnimalName="Bike"/> 
         </ErrorBoundary>
        
    </>
  )
 }
}