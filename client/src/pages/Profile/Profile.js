import { useState, useEffect } from 'react'
import { Form, Button, Row, Container, Col } from 'react-bootstrap'
import axios from 'axios'
import ButtonComponent from '../../components/ButtonCompnent/ButtonComponent'
import Navigation from '../../components/Navigation'
import './Profile.css'

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

  const handleSubmitNote = ()=> {
    // event.preventDefault()
   
    let newnote = {
      body: noteState.body
    }
    axios.post('/api/notes', newnote, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        console.log(res.data)
        axios.get('/api/notes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('user')}`
          }
        })
          .then(res => {
            console.log(res.data)
            setNoteState({ ...noteState, notes: res.data })
          })
      })
  }

  const handleDeleteNote = (id) => {
    console.log(id)
    axios.delete(`/api/notes/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
    .then (res =>{
      console.log(res)
      axios.get('/api/notes', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      })
        .then(res => {
          console.log(res.data)
          setNoteState({ ...noteState, notes: res.data })
        })
    })
    

  }


  // const handleGoToNote = (body) => {
  //   console.log(body)
  //   window.location =`/${body}` 
  // }




  return (
    <>
    <section className="background1">
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    
     
      <h1 className="Title">Study NotePad</h1>
       
      <Navigation />
      <h1>Study NotePad</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="noteTitle">Note Url Goes here</Form.Label>
         
          <Form.Control className="textbox"
            as="textarea"
            rows={3}
            name='body'
            onChange={handleInputChange}
          />
            
        </Form.Group>
      </Form>
  
      <Button
        onClick={handleSubmitNote}
      >Save Note</Button>
      {
        noteState.notes.map(note =>
          <>
            <h2>Your study notes:</h2>
            <h6>Created on {note.createdAt.slice(0, -14)}</h6>
            <br />

            <a target="_blank" rel="noopener noreferrer" href={note.body}><ButtonComponent name={'Notes'} /> </a>

            <br />
            <br />
            <Button
              onClick={()=>handleDeleteNote(note._id)}
            >Delete</Button>


            {/* this is how you need to write functions that take in parameters onClick */}
          </>
        )
      }
      </section>
    </>
    
  )
}

export default Profile