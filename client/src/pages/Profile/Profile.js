import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import ButtonComponent from '../../components/ButtonCompnent/ButtonComponent'
import Navigation from '../../components/Navigation'

const Profile = () => {

  const [noteState, setNoteState] = useState({
    title: '',
    body: '',
    notes: []
  })
  const handleInputChange = ({ target: { name, value } }) => { setNoteState({ ...noteState, [name]: value })}

  useEffect(() => {
    axios.get('/api/notes', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
  
      .then(res => {
        // console.log(res.data)
        setNoteState({ ...noteState, notes: res.data })
      }) 
      .catch(err => 
        window.location = '/login')
    
  }, [])

  const handleSubmitNote = event=> {
    event.preventDefault()
   
    let newnote = {
      title: noteState.title,
      body: noteState.body
    }
    axios.post('/api/notes', newnote, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        // console.log(res.data)
        
        axios.get('/api/notes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('user')}`
          }
        })
          .then(res => {
            console.log(res.data)
            setNoteState({ ...noteState, notes: res.data, body: '' })
            
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
          setNoteState({ ...noteState, notes: res.data, body: '' })
        })
    })
    

  }

  
  return (
    <>
      <Navigation />
      <h1>Study NotePad</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Title of notes (max of 10 characters)</Form.Label>
          <Form.Control
            as="textarea"
            maxLength={10}
            rows={1}
            name='title'
            onChange={handleInputChange}
          />


          <Form.Label>Note Url Goes here (ex: document/1234567890) </Form.Label>
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
          
            <a target="_blank" rel="noopener noreferrer" href={note.body}><ButtonComponent name={`${note.title}`}/> </a>

            <br />
            <br />
            <Button
              onClick={()=>handleDeleteNote(note._id)}
            >Delete</Button>


            {/* this is how you need to write functions that take in parameters onClick */}
          </>
        )
      }
    </>

  )
}

export default Profile
