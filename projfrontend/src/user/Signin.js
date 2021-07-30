import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signin, isAutheticated,authenticate} from "../auth/helper"; 


const Signin = () => {

  const [values, setvalues] = useState({
    email:"",
    password:"",
    error:"",
    loading:false,
    didRedirect:false
  })

  const {email,password,error,loading,didRedirect}  = values

  const successMessage = () =>(
    <div className ="alert alert-success"
      style = {{display:success ? "" : "none"}}
  > New Accout created successfully
  Please{" "}<Link >Login Here </Link>
    </div>
  )

  const errorMessage = () =>(
    <div className ="alert alert-danger"
      style = {{display:error ? "" : "none"}}
  > {error}
    </div>
  )

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };




  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {signInForm()}
    </Base>
  );
};

export default Signin;
