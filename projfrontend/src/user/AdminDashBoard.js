import React from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'

const AdminDashBoard= () =>{

    const {user: {name,email,role}} =  isAuthenticated(); 

    const adminLeftSide = () =>{
        return (
            <div className = "card">
                <h4 className ="card-header bg-dark text-white">
                    Admin Navigation
                </h4>
            </div>
        )
    }

    const adminRightSide = () =>{
        return (
             <div className = "card">
                <h4 className ="card-header bg-dark text-white">
                    Admin Navigation
                </h4>
            </div>
        )
    }

    return (
    <div>
        <Base title ="Admin Dashboard">
            <div className = "row">
                <div className ="col-3">   
                    {adminLeftSide()}
                </div>
                <div className ="col-9"> 
                    {adminRightSide()}
                </div>
            </div>
        </Base>
         
    </div>
    )
}

export default AdminDashBoard;
