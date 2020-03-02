import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.addTask = this.addTask.bind(this);
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

      if (todoData.id && todoData.text) {
        todo["taskName"] = todoData.text;
        todo["isDone"] = todoData.done;

        todos.push(todo);
      }

      this.setState({
        todos: todos
      });
    });
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
