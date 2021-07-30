import React,{useState} from 'react'
import Base from '../core/Base'


const signUpForm = () => (
    <div className = "row">
        <div className = "col-md-6 offset-sm-3 text-left">
            <form>
                <div className ="form-group">
                    <label className ="text-light">Name</label>
                    <input className = "form-control" type = "text"></input>
                </div>
                <div className ="form-group">
                    <label className ="text-light">Email</label>
                    <input className = "form-control" type = "email"></input>
                </div>
                <div className ="form-group">
                    <label className ="text-light">Password</label>
                    <input className = "form-control" type = "text"></input>
                </div>
                <button className = "btn btn-success btn-blk">Submitt</button>
            </form>
        </div>
    </div>
)

const Signup = ()=> {
    return (
        <div>
            <Base>  
                {signUpForm()}
            </Base>
        </div>
    )
}

export default Signup;