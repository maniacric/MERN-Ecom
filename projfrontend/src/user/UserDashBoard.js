import React from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'


const {user: {name,email,role}} =  isAuthenticated();

const UserDashBoard= () =>{
    return (
    <div>
        <Base title ="User Dashboard"
        description = "This is your personal space">
        <h3><span className = "bg badge-dark mr-2 text-allign text-center">Welcome :</span>{name}</h3>
        </Base>
    </div>
    )
}

export default UserDashBoard;
