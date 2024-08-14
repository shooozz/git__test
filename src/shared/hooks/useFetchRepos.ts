// import { useEffect } from "react";
// import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
// import {
//     selectRepos,
//     selectReposStatus,
// } from "../entities/Repository/model/selector";
// import { fetchRepositories } from "../entities/Repository/model/slice";

// const useFetchRepos = () => {
//     const { query, sort, order, per_page, page } = useAppSelector(
//         (state: RootState) => state.queryParams
//     );
//     const dispatch = useAppDispatch();
//     const repos = useAppSelector(selectRepos);
//     const reposStatus = useAppSelector(selectReposStatus);

//     useEffect(() => {
//         dispatch(fetchRepositories({ query, sort, order, per_page, page }));
//     }, [query, sort, order, per_page, page]);

//     return { repos, reposStatus };
// };

// export default useFetchRepos;
