import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import UserAPI from '../../utils/UserAPI'
import './Login.css'
import { gsap } from "gsap";
import { Container } from "react-bootstrap"


const LoginForm = () => {

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  useEffect(() => {



    //Specify a starting and ending point in this case the opacity
    tl.fromTo('.login', { opacity: 0 }, { opacity: 1, duration: 8 })

  }, [])


  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setLoginState({ ...loginState, [name]: value })

  const handleLoginUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: loginState.username,
      password: loginState.password
    })
      .then(token => {
        if (token === null) {
          alert('input null')
        } else {
          localStorage.setItem('user', token)
          setLoginState({ ...loginState, username: '', password: '' })
          window.location = '/'
        }
      })

      .catch(err => alert('difficulties logging in'))

  }

  return (
    <Container className="formWidth">
    <Form className="login">
      <Form.Group className="mb-3" controlId="formBasiclUsername">
        <Form.Control
          type="text"
          placeholder='Username'
          name="username"
          value={loginState.username}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiclPassword">
        <Form.Control
          type="password"
          placeholder='Password'
          name="password"
          value={loginState.password}
          onChange={handleInputChange} />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={handleLoginUser}>
        Log in
      </Button>
      <hr />
      <Alert className='alertCenter'>
        Dont have an account?
          <Alert.Link href="/register">&nbsp;Register Now</Alert.Link>
      </Alert>
    </Form>
    </Container>
  )
}

export default LoginForm
