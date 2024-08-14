import { Status } from "../types";
import { RepoDetailsState } from "./types";

export const initialState: RepoDetailsState = {
    item: null,
    status: Status.IDLE,
    error: null,
};
