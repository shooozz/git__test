import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchReposParams, Repository, ReposState } from "./types";
import { Status } from "../types";
const URL_GIT = import.meta.env.VITE_URL_GIT;
const API_KEY = import.meta.env.VITE_API_KEY;

const initialState: ReposState = {
    repositories: [],
    status: Status.IDLE,
    error: null,
};

export const fetchRepositories = createAsyncThunk(
    "repos/fetchRepositories",
    async ({
        query,
        sort = "stars",
        order = "desc",
        per_page = 30,
        page = 1,
    }: FetchReposParams) => {
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
        return response.data.items as Repository[];
    }
);

const repoSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.repositories = action.payload;
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default repoSlice.reducer;
