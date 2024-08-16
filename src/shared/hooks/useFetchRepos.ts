import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
    selectRepos,
    selectReposStatus,
} from "../../entities/Repository/model/selector";
import { fetchRepositories } from "../../entities/Repository/model/slice";
import { querySelectors } from "../../features/SearchRepositories/model/selector";

const useFetchRepos = () => {
    const dispatch = useAppDispatch();

    const query = useAppSelector(querySelectors.selectQuery);
    const sort = useAppSelector(querySelectors.selectSort);
    const order = useAppSelector(querySelectors.selectOrder);
    const per_page = useAppSelector(querySelectors.selectPerPage);
    const page = useAppSelector(querySelectors.selectPage);

    const repos = useAppSelector(selectRepos);
    const reposStatus = useAppSelector(selectReposStatus);

    useEffect(() => {
        dispatch(fetchRepositories({ query, sort, order, per_page, page }));
    }, [query, sort, order, per_page, page]);

    return { repos, reposStatus };
};

export default useFetchRepos;
