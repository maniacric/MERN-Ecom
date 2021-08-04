import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';

const AddCategory =() => {
    
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    const {user,token} = isAuthenticated();

    const myCategoryForm = () =>(
        <form>
            <div className ="form-group">
                <p className = "lead">
                    Enter The Category
                </p>
                <input type = "text" 
                    className ="form-control my-3"
                    autoFocus
                    required
                    placeholder="for Ex. Summer"
                />
                <button className ="btn btn-outline-info"> 
                    Create Category
                </button>
            </div>
        </form>
    )


    const goBack = () =>(
        <div className ="mt-5">
            <Link className ="btn btn-sm btn-info mb-3" to= "/admin/dashboard">
                Admin Home
            </Link>
        </div>
    )


    return (
        <Base title = "Create Category here"
        description = "Add a new category here"
        className = "container bg-success pd-5">
            <div className = "row bg-white rounded">
                    {goBack()}
                    <h1>
                        {myCategoryForm()}
                    </h1>
            </div>
        </Base>
    )
}

export default   AddCategory;
