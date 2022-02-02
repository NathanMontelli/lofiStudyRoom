import React from 'react'
import RegisterForm from "../../components/RegisterForm"
import'./PageRegister.css'
import { motion } from 'framer-motion'
import { Container } from "react-bootstrap"


const Register = () => {

  //first needs class and then movement of object "%" and duration of animation
  
  return (
    <>

      
        <section className="background">
          <Container className="justify-content-center">
            <motion.h1
              initial={{ opacity: 0, translateX: 0, translateY: -50 }}
              animate={{ opacity: 1, translatex: 0, translateY: 0 }}
              transition={{ duration: 5 }}>
              <h1 className='lofi p-5'>LoFi Study Room</h1>
            </motion.h1>
            <Container className='p-5'>
              <h5 >Register A New Account</h5>
              <hr />
            </Container>
            <Container >
              <RegisterForm />
            </Container>
          </Container>
        </section>
     
    </>
  )
}

export default Register
