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

