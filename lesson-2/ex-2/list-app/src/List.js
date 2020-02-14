import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          taskName: "Do something",
          isDone: false
        },
        {
          taskName: "Do something 2",
          isDone: false
        },
        {
          taskName: "Do something 3",
          isDone: true
        },
        {
          taskName: "Do something 4",
          isDone: false
        },
        {
          taskName: "Do something 5",
          isDone: true
        }
      ]
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState(state => {
      let list = state.todos.concat(task);

      return {
        todos: list
      };
    });
  }

  render() {
    let tasksArr = [];
    this.state.todos.forEach((todo, index) => {
      tasksArr.push(
        <Task
          key={index}
          taskData={{ taskName: todo.taskName, isDone: todo.isDone }}
        />
      );
    });

    return (
      <div>
        <div className="tasks-container">{tasksArr}</div>
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default List;
