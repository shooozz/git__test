import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ReposState, Status } from "./types";
import { initialState } from "./initialState";
import { FetchReposParams } from "../../../features/SearchRepositories/model/types";

const URL_GIT = import.meta.env.VITE_URL_GIT;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchRepositories = createAsyncThunk(
    "repos/fetchRepositories",
    async ({ query, sort, order, per_page, page }: FetchReposParams) => {
        const response = await axios.get(`${URL_GIT}/search/repositories`, {
            headers: {
                Authorization: `token ${API_KEY}`,
            },
            params: {
                q: query,
                sort,
                order,
                per_page,
                page,
            },
        });
        return response.data as ReposState;
    }
);

const repoSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {
        setCurrentRepo: (state, action) => {
            state.current = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.items = action.payload.items;
                state.total_count = action.payload.total_count;
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setCurrentRepo } = repoSlice.actions;
export default repoSlice.reducer;
