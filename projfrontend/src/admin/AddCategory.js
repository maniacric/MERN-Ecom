import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { createCategory } from './helper/adminapicall';

const AddCategory =() => {
    
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    const {user,token} = isAuthenticated();

    const handleChange =event =>{
        setError("")
        setName(event.target.value)
    }

    const successMessage = () =>{
        if(!success){
            return <h4 className ="text-success"> Category Created Successfully</h4>
        }
    }

    const errorMessage = () =>{
        if(error){
            return <h4 className ="text-success"> failed to create category</h4>
        }
    }

    const onSubmit = event =>{ 
        event.preventDefault(); 
        setError("");
        setSuccess(false);   

        createCategory(user._id,token,{name})
            .then(data=>{
                if(data.error ){
                    setError(true)
                }else{
                    setError("")
                    setSuccess(true)
                    setName("");
                }
            })
    }


    const myCategoryForm = () =>(
        <form>
            <div className ="form-group">
                <p className = "lead">
                    Enter The Category
                </p>
                <input type = "text" 
                    className ="form-control my-3"
                    onChange = {handleChange}
                    autoFocus
                    required
                    value = {name}
                    placeholder="for Ex. Summer"
                />
                <button onClick={onSubmit} className ="btn btn-outline-info"> 
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
                        {successMessage()}
                        {errorMessage()}
                        <p className="text-light text-center">{JSON.stringify(success)}</p>
                    </h1>
            </div>
        </Base>
    )
}

export default   AddCategory;
