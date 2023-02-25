import axios from "axios";

const baseURL_11 = "https://sp11-cart.000webhostapp.com/cart-trans";
const baseURL_15 = "https://nguyenletuananh.name.vn/laravel/public";

export const addCart = async (request) => {
    if (process.env.REACT_APP_CART_MODULE === "11") {
        return await axios.post(`https://sp11-cart.000webhostapp.com/api/carts_trans/add-to-cart.php`, JSON.stringify(request));
    } else if (process.env.REACT_APP_CART_MODULE === "15") {
        return await axios.get(`${baseURL_15}/AddtoCart1`, {
            params: {
                user_id: request.user_id,
                product_id: request.product_id,
                quantity: request.quantity
            }
        });
    }    
}

export const getUserCartInfo = async (userId) => {
    return await axios.get(`${baseURL_15}/Api/Product-Cart/${userId}`);
}

export const updateQuantityProductApi = async (id, quantity, userId) => {
    return await axios.get(`${baseURL_15}/Save-Item-List-Cart/${id}/${quantity}`, {params: {user_id : userId}})
}

export const deleteQuantityProductApi = async (id, userId) => {
    return await axios.get(`${baseURL_15}/Delete-Item-List-Cart/${id}`, {params: {user_id : userId}})
}






