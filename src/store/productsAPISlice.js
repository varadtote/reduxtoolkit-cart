import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = "loading";
            state.error = null; // Clear any previous errors
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "idle";
            state.error = null;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = "idle";
            state.error = action.error.message; // Store the error message
        });
    },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
    try {
        const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        return result;
    } catch (error) {
        throw new Error("Failed to fetch products");
    }
});
