import React from 'react'
import Base from '../core/Base'

import { isAuthenticated } from '../auth/helper'



const UserDashBoard= () =>{

    const {user: {name,email,role}} =  isAuthenticated(); 

    return (
    <div>
        <Base title ="User Dashboard"
        description = "This is your personal space">
            <h3>welcome {name} </h3>
            <h3>How was your day </h3>
            <h3>Care to do some shopping</h3>
        </Base>
    </div>
    )
}

export default UserDashBoard;
