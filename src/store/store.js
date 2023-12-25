import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsAPISlice from "./productsAPISlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsAPISlice
    }
})

export default store