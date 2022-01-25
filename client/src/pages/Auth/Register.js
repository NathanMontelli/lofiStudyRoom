import RegisterForm from "../../components/RegisterForm"

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-light p-5 rounded-lg m-3">
          <h1 className="display-4">Lofi Study Room</h1>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Register A New Account</h5>
            <hr />
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
