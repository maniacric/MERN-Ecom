import React from "react"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Home from "./core/Home"
import Signup from "../src/user/Signup"
import Signin from "../src/user/Signin"
import AdminRoute from "../src/auth/helper/AdminRoutes"
import PrivateRoute from "../src/auth/helper/PrivateRoutes"
import UserDashBoard from "./user/UserDashBoard"
import AdminDashBoard from "./user/AdminDashBoard"



export default function Routes(){
    return (
        <div>   
            <BrowserRouter>
                <Switch>
                    <Route path ="/" exact component={Home} />
                    <Route path = "/Signup" exact component ={Signup}/>
                    <Route path = "/Signin" exact component ={Signin}/>
                    <PrivateRoute path = "/user/dashboard" exact component ={UserDashBoard}/>
                    <AdminRoute path = "/admin/dashboard" exact component ={AdminDashBoard}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
