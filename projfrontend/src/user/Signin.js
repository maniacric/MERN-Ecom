import React, { useState } from "react";
import Base from "../core/Base";
import { Link,Redirect } from "react-router-dom";
import { signin,isAuthenticated ,authenticate} from "../auth/helper";


const Signin = () =>{
  
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading:"",
    didRedirect : false
  });


  const {email,password,error,loading,didRedirect} = values;
  const {user} = isAuthenticated();

  const onSubmit = event=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({
      email,password
    })
    .then(data =>{
      if(data.error){
        setValues({...values,error:data.error,loading:false})
      }else{

        authenticate(data,()=>{
          setValues({
            ...values,didRedirect:true
          })
        })
      }
    })
    .catch(console.log("signin Request failed"));
  }

  const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };
 
  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>redirect to admin</p>;
      } else {
        return <p>redirect to user dashboard</p>;
      }
    }
   
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };


  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
           
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value = {email}

              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value = {password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };


  return (
    <Base title="Signin here" description = "welcome to signin page">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-light text-center">{JSON.stringify(values)}</p>
    </Base>
  )
}

export default Signin;