import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repo/slice";
import queryParamsSlice from "./query/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        repos: repoReducer,
        queryParams: queryParamsSlice,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
