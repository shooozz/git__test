import { Repository, Status } from "../types";

export interface ReposState {
    items: Repository[];
    total_count: number;
    status: Status.IDLE | Status.LOADING | Status.SUCCESS | Status.ERROR;
    error: string | null;
}
