import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './core/Home'
import SignIn from './user/Signin'
import Signup from './user/Signup'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home}>
                </Route>
                <Route path = "/signup" exact component = {Signup}>
                </Route>
                <Route path = "/signin" exact component = {SignIn}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

