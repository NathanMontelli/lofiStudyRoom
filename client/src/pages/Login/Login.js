import React from 'react'
import './PageLogin.css'
import LoginForm from "../../components/LoginForm"
import {Container } from "react-bootstrap"
import {motion} from 'framer-motion'

const Login = () => {

  return (
    <>
      <section className="background">
      <Container className="justify-content-center">     
          <motion.h1
            initial={{opacity:0, translateX: 0, translateY: -50}}
            animate = {{opacity:1, translatex:0, translateY:0}}
            transition={{duration:5}}>
            <h1 className='lofi p-5'>LoFi Study Room</h1>
          </motion.h1> 
          <Container className='p-5'>
            <h5 >Log In To Existing Account</h5>
            <hr />
          </Container> 
          <Container className='formWidth'>
            <LoginForm />
          </Container>
      </Container>
      </section>
    </>
  )
}

export default Login
