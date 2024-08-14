import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { SortKey } from "./types";

const queryParamsSlice = createSlice({
    name: "queryParams",
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setSort: (state, action: PayloadAction<SortKey>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<"asc" | "desc">) => {
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
