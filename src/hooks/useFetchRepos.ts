import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectRepos, selectReposStatus } from "../redux/repo/selector";
import { fetchRepositories } from "../redux/repo/slice";
import { FetchReposParams } from "../redux/repo/types";

const useFetchRepos = (query: FetchReposParams) => {
    const dispatch = useAppDispatch();
    const repos = useSelector(selectRepos);
    const reposStatus = useSelector(selectReposStatus);

    useEffect(() => {
        dispatch(fetchRepositories(query));
    }, [dispatch]);

    return { repos, reposStatus };
};

export default useFetchRepos;
