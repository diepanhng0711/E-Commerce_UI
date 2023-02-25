import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: {
            data: null,
            isSuccess: false,
            isLoading: false,
            isErrors: false,
            dataError: null
        }
    },
    reducers: {
        getProductStart: (state) => {
            state.product.isLoading = true;
        },
        getProductSuccess: (state, action) => {
            state.product.isLoading = false;
            state.product.isSuccess = true;
            state.product.isErrors = false;
            state.product.data = action.payload;
            state.product.dataError = null;
        },
        getProductError: (state, action) => {
            state.product.isErrors = true;
            state.product.isSuccess = false;
            state.product.isLoading = false;
            state.product.dataError = action.payload;
        },
    }
})

export const {getProductStart, getProductSuccess, getProductError} = productSlice.actions;
export default productSlice.reducer;