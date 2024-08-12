import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchReposParams } from "../types";

const initialState: FetchReposParams = {
    query: "",
    sort: "stars",
    order: "desc",
    per_page: 30,
    page: 1,
};

const queryParamsSlice = createSlice({
    name: "queryParams",
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload;
        },
        setPerPage: (state, action: PayloadAction<number>) => {
            state.per_page = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const { setSearchValue, setSort, setOrder, setPerPage, setPage } =
    queryParamsSlice.actions;
export default queryParamsSlice.reducer;
