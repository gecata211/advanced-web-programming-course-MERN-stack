import React from "react";
import CheckDate from "./CheckDate";
import SumNumbers from "./SumNumbers";
import ListOfNumbers from "./ListOfNumbers";
import SimpleCalc from "./SimpleCalc";

function App() {
  return (
    <div className="App">
      <h1>Component 1: Check date</h1>
      <CheckDate />
      <h1>Component 2: Sum of Numbers</h1>
      <SumNumbers numbers={[1, 2, 4, 10, 20]} />
      <h1>Component 3: List of Numbers</h1>
      <ListOfNumbers numbers={[1, 2, 4, 10, 20]} />
      <h1>Component 4: Simple calculator</h1>
      <SimpleCalc />
    </div>
  );
}

export default App;
