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
import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const Profile = () => {

  const [noteState, setNoteState] = useState({
    body: '',
    notes: []
  })
  const handleInputChange = ({ target: { name, value } }) => {
    setNoteState({ ...noteState, [name]: value })
  }

  useEffect(() => {
    axios.get('/api/notes', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        console.log(res.data)
        setNoteState({ ...noteState, notes: res.data })
      })
  }, [])

  const handleSubmitNote = () => {
    let newnote = {
      body: noteState.body
    }
    axios.post('/api/notes', newnote, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        console.log(res)
      })
  }
  // const handleGoToNote = (body) => {
  //   console.log(body)
  //   window.location =`/${body}` 
  // }

  


  return (
    <>
      <h1>Study NotePad</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note Url Goes here</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
            name='body'
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <Button
        onClick={handleSubmitNote}
      >Submit yo note boi</Button>



     
      {
        noteState.notes.map(note =>
          <>
            <h2>Your study notes:</h2>
            <h6>Created on {note.createdAt.slice(0, -14)}</h6>
            <br />
          
            <a target="_blank" rel="noopener noreferrer" href={note.body}><ButtonComponent name={'Notes'}/> </a>

            <br />
            <br />
         


            {/* this is how you need to write functions that take in parameters onClick */}
          </>
        )
      }
    </>

  )
}

export default Profile
