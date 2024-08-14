import { FetchReposParams } from "../../../redux/types";

export const initialState: FetchReposParams = {
    query: "",
    sort: "stars",
    order: "desc",
    per_page: 30,
    page: 1,
};
