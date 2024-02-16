const people = [
    'mathematician',
    'chemist',
    'physicist',
    'chemist',
    'astrophysicist'
  ];
  
  export default function List() {
    return( people.map(person =>
     <ul> <li>{person}</li></ul>
    ))
    //return <ul>{listItems}</ul>;
  }