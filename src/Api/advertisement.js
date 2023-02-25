import axios from "axios"

export const getAllAdvertisement = async () => {
    return await axios.get("https://ltct-sp19-ads.onrender.com/api/curent-ads")
}   