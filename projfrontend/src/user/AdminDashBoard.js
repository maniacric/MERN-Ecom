import React from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { Link } from 'react-router-dom'

const AdminDashBoard= () =>{

    const {user: {name,email,role}} =  isAuthenticated(); 

    const adminLeftSide = () =>{
        return (
            <div className = "card">
                <div className ="card-header bg-success text-white text-center">
                    Admin Navigation
                    <ul className= "list-group-item">
                        <li>
                        <Link to ="/admin/create/category"className = "nav-link text-info">
                            Create Category
                        </Link>
                        </li>
                    </ul>
                    <ul className= "list-group-item">
                        <li>
                        <Link to ="/admin/category"className = "nav-link text-info">
                            Manage Category
                        </Link>
                        </li>
                    </ul>
                    <ul className= "list-group-item">
                        <li>
                        <Link to ="/admin/create/product"className = "nav-link text-info">
                            Create Products
                        </Link>
                        </li>
                    </ul>
                    <ul className= "list-group-item">
                        <li>
                        <Link to ="/admin/product"className = "nav-link text-info">
                            Manage Products
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    const adminRightSide = () =>{
        return (
             <div className = "card">
                <h4 className ="card-header bg-success text-white">Admin Information</h4>
                <ul className ="list-group">
                    <li className ="list-group-item">
                        <span className = "bg badge-dark mr-2">Name:</span>{name}
                    </li>
                    <li className ="list-group-item">
                        <span className = "bg badge-dark mr-2">Email:</span>{email}
                    </li>
                    <li className ="list-group-item">
                        <span className = "bg badge-dark mr-2">Role:</span>Admin        
                    </li>
                </ul>

            </div>
        )
    }

    return (
        <Base title ="Welcome to Admin Dashboard"
            description  ="Manage all Products"
            className ="container bg-info p-5-4">
            <div className = "row">
                <div className ="col-3">   
                    {adminLeftSide()}
                </div>
                <div className ="col-9"> 
                    {adminRightSide()}
                </div>
            </div>
        </Base>
         
    )
}

export default AdminDashBoard;
