import axios from "axios"

export const getAllColors = async () => {
    return await axios.get("https://p01-product-api-production.up.railway.app/api/colors");
}