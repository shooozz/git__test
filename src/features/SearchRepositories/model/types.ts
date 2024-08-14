export type SortKey = "stars" | "forks" | "updated" | "created";

export interface FetchReposParams {
    query: string;
    sort: "stars" | "forks" | "updated" | "created";
    order: "asc" | "desc";
    per_page: number;
    page: number;
}
