import React from "react"
import Route from "react-router-dom"
import {isAuthenticated} from "./index"


const  AdminRoute = ({ component:Component, ...rest })=> {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/Signin",
                state: { from: props.location}
              }}
            />
          )
        }
      />
    );
  }

export default AdminRoute;