import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const filterAdapter = createEntityAdapter();
const initialState = filterAdapter.getInitialState({
    category: 0,
    sort: { name: "rating", value: "популярности" },
    order: false,
    page: 1,
});

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {
            state.category = action.payload;
        },
        activeSortChanged: (state, action) => {
            state.sort = action.payload;
        },
        activeOrderChanged: (state) => {
            state.order = !state.order;
        },
        activePageChanged: (state, action) => {
            state.page = action.payload;
        },
    },
});

const { actions, reducer } = filterSlice;

export default reducer;
export const {
    activeCategoryChanged,
    activeOrderChanged,
    activeSortChanged,
    activePageChanged,
} = actions;
