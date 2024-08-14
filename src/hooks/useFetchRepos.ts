import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { selectRepos, selectReposStatus } from "../redux/repo/selector";
import { fetchRepositories } from "../redux/repo/slice";

const useFetchRepos = () => {
    const { query, sort, order, per_page, page } = useAppSelector(
        (state: RootState) => state.queryParams
    );
    const dispatch = useAppDispatch();
    const repos = useAppSelector(selectRepos);
    const reposStatus = useAppSelector(selectReposStatus);

    useEffect(() => {
        dispatch(fetchRepositories({ query, sort, order, per_page, page }));
    }, [query, sort, order, per_page, page]);

    return { repos, reposStatus };
};

export default useFetchRepos;
