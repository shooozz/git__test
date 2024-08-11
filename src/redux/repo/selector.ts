import { RootState } from "../store";

export const selectRepos = (state: RootState) => state.repos.items;
export const selectCountRepos = (state: RootState) => state.repos.total_count;
export const selectReposStatus = (state: RootState) => state.repos.status;
