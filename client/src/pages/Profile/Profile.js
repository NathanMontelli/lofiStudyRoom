import { useState, useEffect } from 'react'
import { Form, Button, Row, Container, Col } from 'react-bootstrap'
import axios from 'axios'
import ButtonComponent from '../../components/ButtonComponent'
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
    <section className="background1">
      <Container>
      <h1 className="Title">Study NotePad</h1>
        </Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="noteTitle">Note Url Goes here</Form.Label>
          <Row>
            <Col>
          <Form.Control className="textbox"
            as="textarea"
            rows={3}
            name='body'
            onChange={handleInputChange}
          />
              </Col>
            </Row>
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

            {/* this is how you need to write functions that take in parameters onClick */}
          </>
        )
      }
      </section>
    </>
    
  )
}

export default Profile