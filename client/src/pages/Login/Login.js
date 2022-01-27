import React, { useEffect } from 'react'
import { gsap } from "gsap";
import './PageLogin.css'
import LoginForm from "../../components/LoginForm"

const Login = () => {

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  useEffect(() => {


    tl.to('.lofi', { y: '0%', duration: 1.5, stagger: 0.25 })
  })

  return (
    <>
      <section className="background">
      <div className="container">
        <div className="row p-5 rounded-lg m-3">
            <h1 className='lofi'>LoFi Study Room</h1>
          <hr className="my-4" />
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
      </div>
      </section>
    </>
  )
}

export default Login
