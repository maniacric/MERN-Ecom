import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { loadCart,cartEmpty } from './helper/cartHelper'
import {getmeToken,processPayment} from "./helper/paymenthelper"
import {createOrder} from "./helper/orderhelper"
import { isAuthenticated } from '../auth/helper'
import DropIn from 'braintree-web-drop-in-react'


export default function Paymentb() {
    
    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clintToken: null,
        error:""
    })

    const userId  = isAuthenticated() && isAuthenticated.user_id;
    const token  = isAuthenticated() && isAuthenticated.token;

    const getToken = (userId,token) =>{
        getToken(userId,token).then(info =>{
            console.log("information",info)
            if(info.error){
                setInfo({...info,error:info.error})
            }else{
                const clientToken =info.clientToken;
                setInfo({clientToken})
            }
        })
    }

    useEffect(() => {
        //getToken(userId,token)
    }, [])
    
    return (
        <div>
            <h3>Test BT for brainTree</h3>
        </div>
    )
}
