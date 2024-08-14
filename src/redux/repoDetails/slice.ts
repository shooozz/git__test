import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Status } from "../types";
import { initialState } from "./initialState";
import { FetchRepositoryParams } from "./types";

const URL_GIT = import.meta.env.VITE_URL_GIT;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchRepositoryDetails = createAsyncThunk(
    "repoDetails/fetchRepository",
    async ({ owner, repoName }: FetchRepositoryParams) => {
        const response = await axios.get(
            `${URL_GIT}/repos/${owner}/${repoName}`,
            {
                headers: {
                    Authorization: `token ${API_KEY}`,
                },
            }
        );
        return response.data;
    }
);

const repoDetailsSlice = createSlice({
    name: "repoDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositoryDetails.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchRepositoryDetails.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.item = action.payload;
            })
            .addCase(fetchRepositoryDetails.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default repoDetailsSlice.reducer;
