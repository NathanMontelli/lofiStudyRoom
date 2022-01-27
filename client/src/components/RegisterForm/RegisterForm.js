import React, { useState } from 'react'
import { Form, Button, Alert, Row, Col, InputGroup } from 'react-bootstrap'
import UserAPI from '../../utils/UserAPI'



const RegisterForm = () => {
  const [registerState, setRegisterState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setRegisterState({ ...registerState, [name]: value })

  const [validated, setValidated] = useState(false);

  const handleRegisterUser = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
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
        .catch(err => console.log(err))

    }
    setValidated(true);

  }

  return (
    <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validName">
          <InputGroup hasValidation>
            <Form.Control
              required
              placeholder='Full Name'
              type="text"
              name="name"
              value={registerState.name}
              onChange={handleInputChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validEmail">
          <InputGroup hasValidation>
            <Form.Control
              required
              placeholder='Email'
              type="email"
              name="email"
              value={registerState.email}
              onChange={handleInputChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validUsername">
          <InputGroup hasValidation>
            <Form.Control
              required
              placeholder='Username'
              type="text"
              name="username"
              value={registerState.username}
              onChange={handleInputChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validPassword">
          <InputGroup hasValidation>
            <Form.Control
              required
              placeholder='Password'
              type="password"
              name="password"
              value={registerState.password}
              onChange={handleInputChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button
        variant="primary"
        type="submit"
        onClick={handleRegisterUser}
      >
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
