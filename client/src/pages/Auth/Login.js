import LoginForm from "../../components/LoginForm"

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-light p-5 rounded-lg m-3">
          <h1 className="display-4">LoFi Study Room</h1>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Log In To Existing Account</h5>
            <hr />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
