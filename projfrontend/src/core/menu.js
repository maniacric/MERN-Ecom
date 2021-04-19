import React from "react"
import {Link , withRouter} from "react-router-dom"


const currentTab = (history,path) =>{
    if(history.location.pathname === path){
        return {color: "#FFFFFF"}
    }else{
        return {color: "#d1d1d1"}
    }
}

const Menu =(history) =>{
    return (
        <div>
            <ul className = "nav nav-tabs bg-dark">
                <li className = "nav-item"> 
                    <Link style={currentTab(history,"/")} className = "nav-link"  to="/">
                        Home
                    </Link>
                </li>
                <li className = "nav-item"> 
                    <Link style={currentTab(history,"/cart")} className = "nav-link"  to="/cart">
                        Cart
                    </Link>
                </li>
                <li className = "nav-item"> 
                    <Link style={currentTab(history,"/user/Dashboard")} className = "nav-link"  to="/user/Dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className = "nav-item"> 
                <Link style={currentTab(history,"/user/Dashboard")} className = "nav-link"  to="/A.Dashboard">
                        A.Dashboard
                    </Link>
                </li>
                <li className = "nav-item"> 
                <Link style={currentTab(history,"/signup")} className = "nav-link"  to="/signup">
                        Signup
                    </Link>
                </li>
                <li className = "nav-item"> 
                <Link style={currentTab(history,"/Signin")} className = "nav-link"  to="/Signin">
                        Signin
                    </Link>
                </li>
                <li className = "nav-item"> 
                <Link style={currentTab(history,"/Signout")} className = "nav-link"  to="/Signout">
                        signout                    
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default withRouter(Menu);