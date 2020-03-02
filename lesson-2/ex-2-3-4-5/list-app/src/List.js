import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.props.postTask(task);
  }

  putTask(task) {
    this.props.putTask(task);
  }

  render() {
    let tasksArr = [];
    this.props.todos.forEach((todo, index) => {
      tasksArr.push(
        <Task
          key={index}
          taskData={{
            taskName: todo.taskName,
            isDone: todo.isDone,
            id: todo.id + 1
          }}
          putTask={task => this.putTask(task)}
        />
      );
    });

    return (
      <div>
        <div className="tasks-container">{tasksArr}</div>
        <AddTask addTask={task => this.addTask(task)} />
      </div>
    );
  }
}

export default List;
