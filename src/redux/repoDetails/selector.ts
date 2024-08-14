import { RootState } from "../store";

export const selectRepoDetails = (state: RootState) => state.repoDetails.item;
export const selectRepoDeatilsStatus = (state: RootState) =>
    state.repoDetails.status;
