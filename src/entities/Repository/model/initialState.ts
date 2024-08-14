import { ReposState, Status } from "./types";

export const initialState: ReposState = {
    items: [],
    current: null,
    total_count: 0,
    status: Status.IDLE,
    error: null,
};
