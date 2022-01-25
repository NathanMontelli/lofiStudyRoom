import { useState } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
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
      <div className="mb-3">
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          className="form-control"
          name="username"
          value={loginState.username}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          className="form-control"
          name="password"
          value={loginState.password}
          onChange={handleInputChange} />
      </div>
      <Button
        color="primary"
        onClick={handleLoginUser} >
        Log In
      </Button>
    </Form>
  )
}

export default LoginForm
