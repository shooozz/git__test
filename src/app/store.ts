import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "../entities/Repository/model/slice";
import queryParamsSlice from "../features/SearchRepositories/model/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
