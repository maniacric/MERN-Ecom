import { isAuthenticated } from "../../auth/helper";
import { API } from "../../backend";

const {user} = isAuthenticated();

export const createCategory = (userId,token,category) =>{
    return fetch(`${API}/category/create/${userId}`,{
        method :"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
    .then(response => {
        return response.json();
      })
  .catch(err => {
        console.log(err);
        return err;
    });

}


export  const getCategories = () =>{
    return fetch (`${API}/category`,{
        method:"GET",
        
    }).then(response => {
        return response.json();
      })
  .catch(err => {
        console.log(err);
        return err;
    });
}



export const createProduct  = (userId,token,product) =>{

    return fetch(`${API}/product/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body : product
    }).then(response =>{
        return response.json();
    }).catch(err => {
        console.log(err);
        return err;
    })
     
}


export const getProduct = productId =>{
    return fetch (`${API}/product/${productId}`,{
        method:"GET",
        
    }).then(response => {
        return response.json();
      })
  .catch(err => {
        console.log(err);
        return err;
    });
}


export const deleteProduct  = (userId,token,productId) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method: " DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    }).catch(err => {
        console.log(err);
        return err;
    })
     
}



export const updateProduct  = (userId,token,productId,product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method: " PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body : product
    }).then(response =>{
        return response.json()
    }).catch(err => {
        console.log(err);
        return err;
    })
     
}