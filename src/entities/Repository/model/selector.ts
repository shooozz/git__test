import { RootState } from "../../../app/store";

export const selectRepos = (state: RootState) => state.repos.items;
export const selectCurrentRepo = (state: RootState) => state.repos.current;
export const selectCountRepos = (state: RootState) => state.repos.total_count;
export const selectReposStatus = (state: RootState) => state.repos.status;
