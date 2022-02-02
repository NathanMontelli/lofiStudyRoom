import React, { useState, useEffect } from 'react'
import { Form, Button, Alert, Row, Col, InputGroup, Container } from 'react-bootstrap'
import UserAPI from '../../utils/UserAPI'
import { gsap } from "gsap";
import './Register.css'

const RegisterForm = () => {

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
  useEffect(() => {

    //Specify a starting and ending point in this case the opacity
    tl.fromTo('.register', { opacity: 0 }, { opacity: 1, duration: 3 })
  }, [])

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
          setRegisterState({ ...registerState, name: '', email: '', username: '', password: '' })
          window.location = '/login'
        })
        .catch(err => console.log(err))
    }
    setValidated(true);
  }

  return (
    <Container className='register'>
    <Form noValidate validated={validated} >
      <Row className="mb-3">
        <Form.Group  md="10" controlId="validName">
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
        <Form.Group  md="10" controlId="validEmail">
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
        <Form.Group  md="10" controlId="validUsername">
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
        <Form.Group  md="10" controlId="validPassword">
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
        <Alert.Link href="/login">&nbsp;Login Here</Alert.Link>
      </Alert>
    </Form>
    </Container>

  )
}

export default RegisterForm
