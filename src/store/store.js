import { configureStore } from "@reduxjs/toolkit";
import filter from "../slices/filterSlice.js";

const store = configureStore({
    reducer: { filter },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
