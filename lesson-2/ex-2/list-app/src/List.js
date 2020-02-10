import React, { Component } from "react";
import Task from "./Task";

class List extends React.Component {
  todos = [
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
  ];

  render() {
    let tasksArr = [];
    this.todos.forEach((todo, index) => {
      tasksArr.push(
        <Task
          key={index}
          taskData={{ taskName: todo.taskName, isDone: todo.isDone }}
        />
      );
    });
    return <div>{tasksArr}</div>;
  }
}

export default List;
