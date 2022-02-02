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
