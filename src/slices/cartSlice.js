import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizza: (state, action) => {
            const id =
                `${action.payload.index}` +
                action.payload.activeType +
                action.payload.activeSize;

            if (Object.keys(state.items).includes(id)) {
                state.items[id].count++;
            } else {
                state.items[id] = action.payload;
                state.totalCount += action.payload.count;
                state.totalPrice += action.payload.price;
            }
        },
        incPizzaCount: (state, action) => {
            state.items[action.payload].count++;
            state.totalCount += 1;
            state.totalPrice += state.items[action.payload].price;
        },
        decPizzaCount: (state, action) => {
            state.items[action.payload].count--;
            state.totalCount -= 1;
            state.totalPrice -= state.items[action.payload].price;
        },
        deletePizza: (state, action) => {
            state.totalCount -= state.items[action.payload].count;
            state.totalPrice -=
                state.items[action.payload].price *
                state.items[action.payload].count;
            delete state.items[action.payload];
        },
        clearCart: (state) => {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        },
    },
});

const { actions, reducer } = cartSlice;

export default reducer;
export const {
    addPizza,
    incPizzaCount,
    decPizzaCount,
    deletePizza,
    clearCart,
} = actions;
