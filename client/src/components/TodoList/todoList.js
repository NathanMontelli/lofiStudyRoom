import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Todo = props => <li>{props.todo}</li>;

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;