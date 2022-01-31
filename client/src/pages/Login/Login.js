import React from 'react'
import './PageLogin.css'
import LoginForm from "../../components/LoginForm"
import {motion} from 'framer-motion'
import BackgroundButton from "../../components/BackgroundButton";
import Lofi1Button from '../../components/Lofi1Button/Lofi1Button';
import Navigation from '../../components/Navigation'

const Login = () => {

  return (
    <>
      <section className="background">
      <div className="container">
        <div className="row p-5 rounded-lg m-3">     
          <motion.h1
            initial={{opacity:0, translateX: -50, translateY: -50}}
            animate = {{opacity:1, translatex:0, translateY:0}}
            transition={{duration:5}}>
            <h1 className='lofi'>LoFi Study Room</h1>
          </motion.h1>  
        </div>
        <div className="row">
        <div className="col-md-4"></div>
          <div className="col-md-4 text">
            <h5>Log In To Existing Account</h5>
            <hr />
            <LoginForm />
          <div className="col-md-4"></div>
          </div>
        </div>
        <BackgroundButton />
        <Lofi1Button />
        
      </div>
      </section>
    </>
  )
}

export default Login
