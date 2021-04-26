import React, { Children } from "react"
import Menu from "../core/Menu"


const Base =
({
Title = "My Title",    
description = "My description",
className = "bg-dark text-white p-4",
children = "put your main text here"

})=> 

(
    <div>
        <Menu/>
        <div className = "container-fluid">
            <div className = "jumbotron  bg-dark  text-white text-center">
            
                <h2 className = "display-4">{Title}</h2>
                <p className = "lead"> {description}</p>
            </div>
           <div className = {className}>
            {children}
           </div>
        </div>    
        <footer className = "footer  bg-dark mt-auto py-3">
            <div className = "container-fluid bg-success text-white text-center">
                <h4>
                    if you have any questions feel free to reach out
                </h4>
                <button className = "btn btn-warning btn-lg">
                    Contact Us
                </button>
            </div>
            <div className = "container">
                <span className = "text-white">An amazing MERN WEBSITE</span>
            </div>
            
        </footer>
    </div>
)
    


export default Base;