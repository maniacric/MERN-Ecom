import {API} from "../../backend"

export const createCategory =(userId,token,category) =>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorisation:`Bearer ${token}`
        },
        body: JSON.stringify(category)
    })   
    .then(Response =>{
        return Response.json()
    })
    .catch(err=>console.log(err));
};