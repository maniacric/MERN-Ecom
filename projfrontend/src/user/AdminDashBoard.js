import React from "react"
import Base from "../core/Base"
import {isAuthenticated} from "../auth/helper/index"
import { Link } from "react-router-dom";


const  AdminDashBoard = ()=>{
    
    const {user:{name ,email}} =isAuthenticated();
    const adminLeftside = ()=>{
        return(
            <div className = "card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className = "list-group">
                    <li className ="list-group-item">
                        <Link to = "/admin/create/category" className = "nav-link text-success">Create Category</Link>
                    </li>
                </ul>
                <ul className = "list-group">
                    <li className ="list-group-item">
                        <Link to = "/admin/create/product" className = "nav-link text-success">Create Product</Link>
                    </li>
                </ul>
                <ul className = "list-group">
                    <li className ="list-group-item">
                        <Link to = "/admin/products" className = "nav-link text-success">Manage Product</Link>
                    </li>
                </ul>
                <ul className = "list-group">
                    <li className ="list-group-item">
                        <Link to = "/admin/orders" className = "nav-link text-success">Manage Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSide = ()=>{
        return (
            <div className = "card mb-4">
                <h4 className="card-header bg-dark text-white">Admin Info</h4>
                <ul className = "list-group">
                    <li className ="list-group-item">
                        <p><span className = "badge badge-danger mr-2">Name</span>{name}</p>
                    </li>
                    <li className ="list-group-item">
                        <p><span className = "badge badge-info mr-2">Email</span>{email}</p>
                    </li>
                    <li className ="list-group-item">
                        <span className = "badge badge-danger mr-2">Admin Area</span>Admin Area
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <Base Title ="Welcome to Admin page" description= "Manage all products here" className="container bg-success p-4">
            <div className="row">
                <div className ="col-3">{adminLeftside()}</div>
                <div className ="col-3">{adminRightSide()}</div>
            </div>            
        </Base>
    )
}


export default AdminDashBoard;