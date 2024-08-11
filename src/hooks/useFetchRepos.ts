import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { selectRepos, selectReposStatus } from "../redux/repo/selector";
import { fetchRepositories } from "../redux/repo/slice";

const useFetchRepos = () => {
    const { query, sort, order, per_page, page } = useSelector(
        (state: RootState) => state.queryParams
    );
    const dispatch = useAppDispatch();
    const repos = useSelector(selectRepos);
    const reposStatus = useSelector(selectReposStatus);

    useEffect(() => {
        dispatch(fetchRepositories({ query, sort, order, per_page, page }));
    }, [query, sort, order, per_page, page]);

    return { repos, reposStatus };
};

export default useFetchRepos;
