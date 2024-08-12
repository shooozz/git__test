import { ReposState } from "./types";
import { Status } from "../types";

export const initialState: ReposState = {
    items: [],
    total_count: 0,
    status: Status.IDLE,
    error: null,
};
