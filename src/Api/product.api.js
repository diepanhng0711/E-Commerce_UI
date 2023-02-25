import axios from "axios";
import {
	getProductStart,
	getProductSuccess,
	getProductError,
} from "../Redux/product.slice";

export const getListProduct = async () => {
	return await axios.get(
		"https://p01-product-api-production.up.railway.app/api/user/products"
	);
};

export const getProductById = async (productId, dispatch) => {
	dispatch(getProductStart());
	try {
		const res = await axios.get(
			`https://p01-product-api-production.up.railway.app/api/user/products/${productId}`
		);
		dispatch(getProductSuccess(res.data.data));
	} catch (err) {
		if (err.response) {
			dispatch(getProductError("that bai"));
		}
	}
};
