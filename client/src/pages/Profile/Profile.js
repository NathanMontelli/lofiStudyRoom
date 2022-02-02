import { useState, useEffect } from 'react'
import { Form, Button, Row, Container, Col } from 'react-bootstrap'
import axios from 'axios'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
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

  const handleSubmitNote = () => {
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
      .then(res => {
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
      <Navigation />
        <Container>
          <Row className="row">
            <Col className="notepad"><h1 className="Title">Study NotePad</h1>
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
      <Button className="justify-content-center"
        onClick={handleSubmitNote}
              >Save Note ID</Button></Col>
              <Col className="noteSection">
              <h1 className="Title">Saved Notes:</h1>
              <Row className="savedNote">
               
      {
        noteState.notes.map(note =>
          <>
            <h2 className="subtitle">Your Note: Created on {note.createdAt.slice(0, -14)}</h2>
            <h6 className="subtitle"></h6>
            
            <Col md={{ span: 3, offset: 3 }}><a target="_blank" rel="noopener noreferrer" href={note.body}><ButtonComponent name={'Notes'} /> </a></Col>
            <Col md={{ span: 3, }} >
              
            <Button
              size= "sm"
              variant="danger"
              onClick={() => handleDeleteNote(note._id)}
              >Delete</Button>
            </Col>

            <br />
            <br />
            <Col></Col>
            {/* this is how you need to write functions that take in parameters onClick */}
          </>
        )
      }
              </Row>
              
            </Col>
          
          </Row>
         
        </Container>
</section>
    </>

  )
}

export default Profile