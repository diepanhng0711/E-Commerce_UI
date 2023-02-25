import axios from "axios"

export const getAllCategories = async () => {
    return await axios.get("https://p01-product-api-production.up.railway.app/api/categories")
} 