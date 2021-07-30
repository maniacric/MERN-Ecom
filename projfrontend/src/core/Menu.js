import { bigIntLiteral } from '@babel/types'
import React from 'react'
import {Link,withRouter} from "react-router-dom"


const Menu = () => (

    <div>
        <ul className = "nav nav-tabs bg-dark">
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    Home
                </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    Signup
                </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    Signin
                </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    Signout
                </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    A.Dashboard
                </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to ="/">
                    cart
                </Link>
            </li>
        </ul>
    </div>

)


export default withRouter( Menu);