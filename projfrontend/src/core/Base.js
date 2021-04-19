import React from "react";

const Base =({
     title = "myTitle",
    description = "myDescription",
    className= "bg-dark text-white p-4",
    children =""

}) =>{


    return (
        <div>
            <div className = "container-fluid">
                <div className = "jumbotron bg-dark text-white textalign-centre "></div>
                    <h2 className = "display-4">{title}</h2>
                    <p className ="lead">{description}</p>
            </div>
            <div className = {className}> {children}</div>
            <footer className = "footer bg-dark mt-auto py-3">
                <div containerName = "container-fluid bg-success text-white text-center">
                    <h4 className = "text-white text-center">
                        If any questions feel free to reach out
                    </h4>
                    <button className = "btn btn-warning btn-lg  align-center">Contact Us</button>

                </div>
                <div containerName = "container">
                    <span className ="text-muted">
                        Amazing place to buy <span className="bg-white">Tshirts </span>
                    </span>
                </div>

            </footer>
        </div>
    )
}

export default Base;