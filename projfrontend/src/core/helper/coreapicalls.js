import { API } from "../../backend";

export const getProducts  = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then(response => {
      console.log("working")
      return response.json();
    })
    .catch(err => console.log(err));
};