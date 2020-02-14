import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add task" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ taskName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask({
      taskName: this.state.taskName,
      isDone: false
    });
  }
}

export default AddTask;
