import React from "react";

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
  }

  handleChange = event => {
    this.setState({ todoInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput);
    console.log("props", this.props);
    // Add the new todo to the list
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" placeholder="Add todo" value={this.state.todoInput} onChange={event => this.handleChange(event)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;