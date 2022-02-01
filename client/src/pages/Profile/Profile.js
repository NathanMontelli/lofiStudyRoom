import React, { useState, useEffect } from 'react'
import './Profile.css'
import { Row, Container, Col } from 'react-bootstrap'
import WelcomeBadge from "../../components/WelcomeBadge"
import Navigation from "../../components/Navigation"
import Rain from '../../components/backgroundSounds/Rain';
import Fire from '../../components/backgroundSounds/Fire';
import Cars from '../../components/backgroundSounds/Cars';
import Waves from '../../components/backgroundSounds/Waves';
import Bot from '../../components/Modals/botModal';
import NotesBadge from "../../components/NotesBadge"
import TodoList from "../../components/TodoList"
import TodoForm from "../../components/TodoForm"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = todo => {
    // var array = this.state.todos;
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
    console.log(this.state.todos);
    console.log("new", todo);
    // complete array will be
    //  array.push(todo);
    //  console.log(array)
  };

  deleteTodo = value => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== value),
    }));
  };
  render() {
    return (
      <>
        <div className="background1">
          <Navigation />
          <Container>
            <Row>
              <Col><WelcomeBadge /> </Col>
              <Col><NotesBadge /></Col>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Bot />
              <br />
              <br />
              <br />
              <Rain />
              <br />
              <br />
              <Fire />
              <br />
              <br />
              <Cars />
              <br />
              <br />
              <Waves />
            </Row>
          </Container>
        </div>
        <div>
          <h1>Todos</h1>
          <TodoList todos={this.state.todos} />
          <TodoForm addTodo={this.addTodo} />
        </div>
      </>
    )
  }
}

export default Profile;