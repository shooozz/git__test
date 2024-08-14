import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
} from "@mui/material";
import styles from "./RepositoryTable.module.scss";
import { Pagination } from "../Pagination/Pagination";
import { selectCountRepos, selectRepos } from "../../redux/repo/selector";
import { format } from "date-fns";
import { fetchRepositoryDetails } from "../../redux/repoDetails/slice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { Repository } from "../../redux/types";
import { fetchRepositories } from "../../redux/repo/slice";
import { setOrder, setSort } from "../../redux/query/slice";

const tableHead = [
    { label: "Название", key: "name" },
    { label: "Язык", key: "language" },
    { label: "Число форков", key: "forks_count" },
    { label: "Число звезд", key: "stargazers_count" },
    { label: "Дата обновления", key: "updated_at" },
];

export const RepositoryTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const { query, sort, order, per_page, page } = useAppSelector(
        (state: RootState) => state.queryParams
    );
    const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

    const repositories = useAppSelector(selectRepos);
    const totalCount = useAppSelector(selectCountRepos);

    React.useEffect(() => {
        dispatch(fetchRepositories({ query, sort, order, per_page, page }));
    }, [page, per_page, query, sort, order, dispatch]);

    const handleRowClick = (index: number, repo: Repository) => {
        dispatch(
            fetchRepositoryDetails({
                owner: repo.owner.login,
                repoName: repo.name,
            })
        );
        setSelectedRow(index);
    };

    const handleRequestSort = (property: string) => {
        if (sort === property) {
            dispatch(setOrder(order === "asc" ? "desc" : "asc"));
        } else {
            dispatch(setSort(property));
            dispatch(setOrder("asc"));
        }
    };

    const sortedRepositories = React.useMemo(() => {
        const sortedArray = [...repositories].sort((a, b) => {
            if (a[sort] < b[sort]) return order === "asc" ? -1 : 1;
            if (a[sort] > b[sort]) return order === "asc" ? 1 : -1;
            return 0;
        });
        return sortedArray;
    }, [repositories, sort, order]);

    return (
        <div className={styles.container}>
            {totalCount >= 1 ? (
                <>
                    <h1>Результаты поиска</h1>
                    <TableContainer
                        component={Paper}
                        className={styles.tableContainer}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {tableHead.map((item) => (
                                        <TableCell
                                            key={item.key}
                                            sortDirection={
                                                sort === item.key
                                                    ? order
                                                    : false
                                            }
                                        >
                                            <TableSortLabel
                                                active={sort === item.key}
                                                direction={
                                                    sort === item.key
                                                        ? order
                                                        : "asc"
                                                }
                                                onClick={() =>
                                                    handleRequestSort(item.key)
                                                }
                                            >
                                                {item.label}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedRepositories.map((repo, index) => (
                                    <TableRow
                                        key={repo.id}
                                        onClick={() =>
                                            handleRowClick(index, repo)
                                        }
                                        className={
                                            selectedRow === index
                                                ? styles.selectedRow
                                                : ""
                                        }
                                    >
                                        <TableCell>{repo.name}</TableCell>
                                        <TableCell>{repo.language}</TableCell>
                                        <TableCell>
                                            {repo.forks_count}
                                        </TableCell>
                                        <TableCell>
                                            {repo.stargazers_count}
                                        </TableCell>
                                        <TableCell>
                                            {format(
                                                new Date(repo.updated_at),
                                                "dd.MM.yyyy"
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination />
                </>
            ) : (
                <>
                    <h1>Ищем репозиторий...</h1>
                </>
            )}
        </div>
    );
};
