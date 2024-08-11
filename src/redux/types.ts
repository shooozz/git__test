export enum Status {
    IDLE = "idle",
    LOADING = "loading",
    SUCCESS = "succeeded",
    ERROR = "failed",
}

export interface FetchReposParams {
    query: string;
    sort?: string;
    order?: string;
    per_page?: number;
    page?: number;
}
