import { Status } from "../types";

export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    language: string | null;
}

export interface ReposState {
    repositories: Repository[];
    status: Status.IDLE | Status.LOADING | Status.SUCCESS | Status.ERROR;
    error: string | null;
}

export interface FetchReposParams {
    query: string;
    sort?: string;
    order?: string;
    per_page?: number;
    page?: number;
}
