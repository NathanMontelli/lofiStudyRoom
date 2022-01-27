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
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={registerState.name}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={registerState.email}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={registerState.username}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
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
    <Alert>
       Already have an account?
    <Alert.Link href="/login">Login Here</Alert.Link>
    </Alert>
    </Form>
  )
}

export default RegisterForm
