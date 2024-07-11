// import './App.css'
import './css/output.css'
import { people, people2 } from './data';
import { Button } from "flowbite-react";
import { Component } from './table';


function App() {
  // const [count, setCount] = useState(0)
  // const animals = ["LION", "TIGER", "CROCODILE", "CAT", "DOG"];

return (
  <div className="flex flex-col justify-center">
  <h1 className="text-5xl mb-4">Chemists: </h1>
  <Component people={people2} />
  {/* <List people={people2} /> */}
  </div>

  );

}

export default App
