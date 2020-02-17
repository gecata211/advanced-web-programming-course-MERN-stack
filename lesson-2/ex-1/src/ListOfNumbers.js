import React from "react";

function ListOfNumbers(props) {
  let numbersList = props.numbers.map((number, key) => (
    <li key={key}>{number}</li>
  ));
  return <ul>{numbersList}</ul>;
}

export default ListOfNumbers;
