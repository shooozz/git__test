import { RootState } from "../store";

export const selectRepos = (state: RootState) => state.repos.repositories;
export const selectReposStatus = (state: RootState) => state.repos.status;
