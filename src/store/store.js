import { configureStore } from "@reduxjs/toolkit";
import filter from "../slices/filterSlice.js";
import cart from "../slices/cartSlice.js";

const store = configureStore({
    reducer: { filter, cart },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
