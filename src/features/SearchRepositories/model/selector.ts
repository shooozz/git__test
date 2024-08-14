import { RootState } from "../../../app/store";

export const querySelectors = {
    selectQuery: (state: RootState) => state.queryParams.query,
    selectSort: (state: RootState) => state.queryParams.sort,
    selectOrder: (state: RootState) => state.queryParams.order,
    selectPerPage: (state: RootState) => state.queryParams.per_page,
    selectPage: (state: RootState) => state.queryParams.page,
};
