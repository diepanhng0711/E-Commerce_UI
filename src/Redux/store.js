import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice"
import productReducer from "./product.slice"
const rootReducer = {
    auth: authReducer,
    product: productReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store;