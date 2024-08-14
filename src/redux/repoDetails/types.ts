import { Repository, Status } from "../types";

export interface FetchRepositoryParams {
    owner: string;
    repoName: string;
}

export interface RepoDetailsState {
    item: Repository | null;
    status: Status.IDLE | Status.LOADING | Status.SUCCESS | Status.ERROR;
    error: string | null;
}
