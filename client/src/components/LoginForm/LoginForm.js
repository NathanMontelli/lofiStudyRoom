import React,{ useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import UserAPI from '../../utils/UserAPI'

const LoginForm = () => {
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
        localStorage.setItem('user', token)
        setLoginState({ ...loginState, username: '', password: '' })
        window.location = '/'
      })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasiclUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={loginState.username}
          onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiclPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
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
      <Alert>
       Dont have an account?
        <Alert.Link href="/register">Register Now</Alert.Link>
      </Alert>
    </Form>
  )
}

export default LoginForm
