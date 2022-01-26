import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import UserAPI from '../../utils/UserAPI'


const RegisterForm = () => {
  const [registerState, setRegisterState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setRegisterState({ ...registerState, [name]: value })

  const handleRegisterUser = event => {
    event.preventDefault()
    UserAPI.register({
      name: registerState.name,
      email: registerState.email,
      username: registerState.username,
      password: registerState.password
    })
      .then(() => {
        alert('User Registered! Please Log In!')
        setRegisterState({ ...registerState, name: '', email: '', username: '', password: '' })
        window.location = '/login'
      })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          placeholder='Full Name'
          type="text"
          name="name"
          value={registerState.name}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control
          placeholder='Email'
          type="email"
          name="email"
          value={registerState.email}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control
          placeholder='Username'
          type="text"
          name="username"
          value={registerState.username}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
        placeholder='Password'
          type="password"
          name="password"
          value={registerState.password}
          onChange={handleInputChange} />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={handleRegisterUser}>
        Register
      </Button>
    <hr />
    <Alert className='stuff'>
       Already have an account?
    <Alert.Link href="/login">Login Here</Alert.Link>
    </Alert>
    </Form>

  )
}

export default RegisterForm
