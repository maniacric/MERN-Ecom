import React from 'react'
import Base from '../core/Base'

import { isAuthenticated } from '../auth/helper'



const UserDashBoard= () =>{
    return (
    <div>
        <Base title ="User Dashboard"
        description = "This is your personal space">
            <h3>welcome </h3>
        </Base>
    </div>
    )
}

export default UserDashBoard;
