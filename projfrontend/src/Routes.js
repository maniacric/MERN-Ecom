import React from "react"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Home from "./core/Home"
import Signup from "../src/user/Signup"
import Signin from "../src/user/Signin"

export default function Routes(){
    return (
        <div>   
            <BrowserRouter>
                <Switch>
                    <Route path ="/" exact component={Home} />
                    <Route path = "/Signup" exact component ={Signup}/>
                    <Route path = "/Signin" exact component ={Signin}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
