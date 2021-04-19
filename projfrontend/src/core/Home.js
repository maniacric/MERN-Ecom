import React from 'react';
import {API} from "../backend" ;
import Base from "./Base.js";
import Menu from "./menu"

export default function Home(){
    console.log("API is",API)
    return (
        <Base title = "welcome to the tshirt website">
        <Menu>

        </Menu>
            <h1 className = "text-white">
                Hello frontEnd
            </h1>
        </Base>

    )
}

