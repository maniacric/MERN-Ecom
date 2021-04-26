import React,{useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signin, signup } from "../auth/helper";

const Signup = () =>{
    

    const [values,setValues]  = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });
    
    const {name,email,password,error,success} =values

    const handleChange = name =>event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmitt = event=>{
        event.preventDefault()
        setValues({...values,error:true})
        signup({name,email,password})
        .then(data =>{
            //console.log("successful12")
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({
                    ...values,
                    name:"",
                email:"",
                password:"",
                error:"",
                success:true
                })
            }
        })
        .catch(err=>{
            console.log("error in signing up")
        }) 
    }


    const successMessage= () =>{
        return (
            <div className = "row">
            <div className= "col-md-6 offset-sm-3 text-left">
            <div className = "alert alert-success"
                    style={{display: success? "":"none"}}>
                    Account created successfully ,Please{" "}<Link to= "/signin"> Login Here</Link>
                </div>
            </div>
            </div>)
    }


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



    const signupForm = () =>{
        return(
            <div className = "row">
                <div className= "col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className = "form-group">
                            <label className = "text-light">Name</label>
                            <input className = "form-control" 
                            onChange={handleChange("name")} 
                            type= "text" value= {name}  />
                        </div>
                        <div className = "form-group">
                            <label className = "text-light">Email</label>
                            <input className = "form-control" 
                            onChange={handleChange("email")} 
                            type= "text" value= {email}  />
                        </div>
                        <div className = "form-group">
                            <label className = "text-light">Password</label>
                            <input className = "form-control" 
                            onChange={handleChange("password")} 
                            type= "password"
                            value= {password} />
                        </div>
                        <button 
                        className = "btn btn-success" onClick={onSubmitt}>
                            Submitt
                        </button>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <Base Title = "Signup page works" description = "A page for user SignUp">
            {successMessage()}
            {errorMessage()}
            {signupForm()}
            <p className = "text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signup;