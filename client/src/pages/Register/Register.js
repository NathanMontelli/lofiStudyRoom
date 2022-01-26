import RegisterForm from "../../components/RegisterForm"
import './register.css'

const Register = () => {
  return (
    <>
      <div className='bg'>
        <div className="container">
          <div className="row bg-light transparent p-1 rounded-lg m-3">
            <h1 className="display-4">LoFi Study Room</h1>
            <hr className="my-1" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Register A New Account</h5>
              <hr />
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
