import React from "react";

function SumNumbers(props) {
  return (
    <div>
      <p>
        The sum of <strong>{props.numbers.join(", ")}</strong> is:{" "}
        <strong>{sum(props.numbers)} </strong>
      </p>
    </div>
  );

  function sum(numbers) {
    let sum = 0;

    numbers.forEach(num => (sum += Number(num)));

    return sum;
  }
}

export default SumNumbers;
