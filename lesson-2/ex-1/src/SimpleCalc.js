import React from "react";
import SumNumbers from "./SumNumbers";

class SimpleCalc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      currentValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.currentValue}
            onChange={this.handleChange}
            style={{ border: `1px solid black` }}
          />
          <input type="submit" value="Add number" />
        </form>
        {<SumNumbers numbers={this.state.numbers} />}
      </div>
    );
  }
  handleChange(event) {
    this.setState({ currentValue: event.target.value });
  }
  handleSubmit(event) {
    let arr = [];
    arr.push(this.state.currentValue);
    this.setState({
      numbers: this.state.numbers.concat(arr)
    });
    event.preventDefault();
  }
}

export default SimpleCalc;
