import React, { Fragment } from "react"
import {Link,withRouter} from "react-router-dom"
import { isAuthenticated, signout } from "../auth/helper"

const currentTab = (history,path) =>{
    if(history.location.pathname === path){
        return {color: "#FFFFFF"}
    }
    else{
        return {color: "#2ecc72"}
    }
}

const Menu = (history)=>{
    return (
    <div>
        <ul className= "nav nav-tabs bg-dark">
            <li className = "nav-item">
                <Link style ={currentTab(history,"/Home")} className = "nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className = "nav-item">
                <Link style ={currentTab(history,"/Cart")} className = "nav-link" to="/Cart">
                    Cart
                </Link>
            </li>
            {isAuthenticated()&& isAuthenticated().user.role ===0 && (
                     <li className = "nav-item">
                     <Link style ={currentTab(history,"/user/dashboard")} className = "nav-link" to="/user/dashboard">
                         Dashboard
                     </Link>
                 </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                <li className = "nav-item">
                <Link style ={currentTab(history,"/admin/dashboard")} className = "nav-link" to="/admin/dashboard">
                    Admin Dashboard
                </Link>
            </li>
           )}

            {!isAuthenticated() && (
                   <Fragment>
                   <li className = "nav-item">
                       <Link style ={currentTab(history,"/Signup")} className = "nav-link" to="/Signup">
                           Signup
                       </Link>
                   </li>
                   <li className = "nav-item">
                       <Link style ={currentTab(history,"/Signin")} className = "nav-link" to="/Signin">
                           Signin
                       </Link>
                   </li>
                   </Fragment>
            )}

            {isAuthenticated() && (
                <li className = "nav-item">
                    <span className="nav-link text-warning"
                    onClick={()=>{signout(()=>{
                        history.push("/")
                    })
                }}>
                        Signout
                    </span>
                </li>
            )}
        </ul>
    </div>
    )
}

export default withRouter(Menu);
