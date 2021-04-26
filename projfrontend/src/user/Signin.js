import React from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"

const Signin = () =>{

    const signinForm = () =>{
         
        return (
        <div className = "row">
            <div className= "col-md-6 offset-sm-3 text-left">
                <form>
                    <div className = "form-group">
                        <label className = "text-light">Email</label>
                        <input className = "form-control" type= "text" />
                    </div>
                    <div className = "form-group">
                        <label className = "text-light">Password</label>
                        <input className = "form-control" type= "password" />
                    </div>
                    <button className = "btn btn-success">
                        Submitt
                    </button>
                </form>
            </div>
        </div>
    )
   
}


    return (
        <Base title = "Signin Page" description ="Existing users can signin through this page">
            {signinForm()}
        </Base>
    )   
}

export default Signin;