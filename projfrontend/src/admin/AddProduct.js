import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated} from '../auth/helper';
import Base from '../core/Base';
import { createCategory, createProduct, getCategories } from './helper/adminapicall';


const AddProduct = () =>{


    const {user,token} = isAuthenticated();

    const [values, setvalues] = useState({
        name:"",
        description:"",
        price:"",
        stock:""
    })

    const {name,
        description,
        price,
        stock,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getRedirect,
        formData
    
    } = values;


    const preload = () =>{
        getCategories().then(data =>{
            console.log(data);
            if(data.error){
                setvalues({...values,error:data.error})
            }else{
                setvalues({...values,categories:data, formData:new FormData()});
            }
        })
    }


    useEffect(() => {
       preload();
    }, []);


    const successMessage = () =>{
        <div
            className ="alert alert-success mt-3"
        >
            <h4>{createProduct} created Successfully</h4>
        </div>
    }

    const errorMessage = () =>{
        if(error){
            return <h4 className ="text-success"> failed to create category</h4>
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setvalues({...values,error:"",loading: true})
        createProduct(user._id,token,FormData).then(data=>{
            if(data.error){
                setvalues({...values,error:data.error})
            }else{
                setvalues({
                    ...values,
                    name:"",
                    description:"",
                    price:"",
                    stock:"",
                    loading: false,
                    createProduct: data.name
                })
            }
        })
        .catch( )
    
    }   

    const handleChange = name => event =>{
        const value = name === "photo" ? event.target.file [0]:event.target.value 
        formData.set(name,value);
        setvalues({...values,[name]: value})
    }

    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories && 
                categories.map((cate,index)=>(
                    <option key ={index} value ={cate._id} >{cate.name}</option>
                ))
              }
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Create Product
          </button>
        </form>
      );


    return (
        <Base title = "Add Products here"
        description = "Hello Admin,Add your products here"
        className= "container bg-info p-4"
        >
            <Link to = "/admin/dashboard" className ="btn btn-success">
            Admin
            </Link>
            <div className = "row bg-dark text-white rounded">
                <div className ="col-md-8 offset-md-2">
                    {successMessage}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
}


export default AddProduct;
