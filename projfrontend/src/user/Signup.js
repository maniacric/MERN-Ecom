import React ,{useState} from "react"
import Base from "../core/Base"
import Link from "react-router-dom"

const Signup = () =>{
    const signupForm = () =>{
        return (
            <div className = "row">
                <div className = ""></div>
            </div>
        )
    } 
    return (
        <Base title = "signup page" description = "page for user to signup!">
            <h1>
                Signup works
            </h1>
        </Base>
    )

}

export default Signup;