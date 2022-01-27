import React, {useEffect} from 'react'
import RegisterForm from "../../components/RegisterForm"
import'./PageRegister.css'
import { gsap } from "gsap";

const Register = () => {

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  //first needs class and then movement of object "%" and duration of animation
  useEffect(() => {


    tl.to('.lofi', { y: '0%', duration: 1.5, stagger: 0.25 })
  })


  return (
    <>
      <section className="background">
      <div className="container">
        <div className="row p-5 rounded-lg m-3">
         <h1 className='lofi'>Lofi Study Room</h1>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 text">
            <h5>Register A New Account</h5>
            <hr />
            <RegisterForm />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register
