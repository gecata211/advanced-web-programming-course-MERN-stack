import React from "react";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <List
        todos={this.state.todos}
        postTask={task => this.postTask(task)}
        putTask={task => this.putTask(task)}
      />
    );
  }

  componentDidMount() {
    this.getTodoData();
  }

  async getTodoData() {
    const url = "https://krdo-todo-api.herokuapp.com/api/tasks";
    const response = await fetch(url);
    const data = await response.json();

    let todos = [];
    data.forEach(todoData => {
      let todo = {};

      if (todoData.text) {
        todo["taskName"] = todoData.text;
        todo["isDone"] = todoData.done;
        todo["id"] = todoData.id;

        todos.push(todo);
      }

      this.setState({
        todos: todos
      });
    });
  }

  async postTask(task) {
    console.log(task);
    const response = await fetch(
      "https://krdo-todo-api.herokuapp.com/api/tasks",
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          text: task.taskName,
          done: task.isDone
        })
      }
    );
    await console.log(response.json());
    this.getTodoData();
  }
  async putTask(task) {
    console.log(task);
    const response = await fetch(
      `https://krdo-todo-api.herokuapp.com/api/tasks/${task.id}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
          text: task.taskName,
          done: task.isDone
        })
      }
    );
    await console.log(response.json());
    this.getTodoData();
  }
}

export default App;
