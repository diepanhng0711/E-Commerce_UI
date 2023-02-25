import axios from "axios"

export const getAllSizes = async () => {
    return await axios.get("https://p01-product-api-production.up.railway.app/api/sizes");
}