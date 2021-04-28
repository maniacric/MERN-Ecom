import React, { useState } from "react"
import Base from "../core/Base"
import {Link,Redirect} from "react-router-dom"
import {authenticate,isAuthenticated, signin} from "../auth/helper/index"


const Signin = () =>{

    const [values,setValues]  = useState({
        email:"smishra@gmail.com",
        password:"123456",
        error:"",
        loading:false,
        didRedirect:false
    });
    
    const {email,password,error,loading,didRedirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name =>event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false,loading:true,})
        signin({email,password})
        .then(data =>{
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect:true
                    })
                })
            }
        })
        .catch(console.log("signin request failed"))
    }

    const performRedirect = () =>{
        //todo redirection      
        if(didRedirect){
            if(user && user.role==1){
                return <Redirect to ="/admin/dashboard"/>
            }
            else{
                return <Redirect to = "/user/dashboard"/>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }


    const loadingMessage= () =>{
        return (
            loading && (
                <div className = "alert alert-info">
                    <h2>
                        Loading....
                    </h2>
                </div>
            )        
    )}


    const errorMessage= () =>{
    return(
    <div className = "row">
    <div className= "col-md-6 offset-sm-3 text-left">
    <div className = "alert alert-danger"
            style={{display:error?"":"none"}}>
            {error}

        </div>
    </div>
    </div>)}


 

    const signinForm = () =>{
         
        return (
        <div className = "row">
            <div className= "col-md-6 offset-sm-3 text-left">
                <form>
                    <div className = "form-group">
                        <label className = "text-light">Email</label>
                        <input onChange={handleChange("email")} value = {email} className = "form-control" type= "text" />
                    </div>
                    <div className = "form-group">
                        <label className = "text-light">Password</label>
                        <input onChange={handleChange("password")} value = {password}className = "form-control" type= "password" />
                    </div>error:false,loading:true
                    <button onClick= {onSubmit} className = "btn btn-success">
                        Submitt
                    </button>
                </form>
            </div>
        </div>
    )
   
}


    return (
        <Base title = "Signin Page" description ="Existing users can signin through this page">
            {loadingMessage()}
            {errorMessage()}
            {signinForm()}
            {performRedirect()}
            <p  className= "text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )   
}

export default Signin;