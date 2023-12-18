import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usePizzaService from "../sevices/usePizzaService.js";

const initialState = {
    pizzas: [],
    pizzasLoadingStatus: "idle",
    pizzaOk: "",
};

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", (arr = []) => {
    const { getPizzas } = usePizzaService();
    return getPizzas(...arr);
});

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        turnPizzaOk: (state) => (state.pizzaOk = "ok"),
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.pizzasLoadingStatus = "loading";
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasLoadingStatus = "idle";
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.pizzasLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = pizzaSlice;

export default reducer;
export const { turnPizzaOk } = actions;
