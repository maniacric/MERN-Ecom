export const addItemToCart = (item,cart)=>{
    let cart = []
    if (typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.push({
            ...item
        })
        localStorage.setItem("cart",JOSN.stringifty(cart));
        next();
    }
}