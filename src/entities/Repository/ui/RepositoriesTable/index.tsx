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
import { selectCountRepos, selectRepos } from "../../model/selector";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { fetchRepositories, setCurrentRepo } from "../../model/slice";
import { querySelectors } from "../../../../features/SearchRepositories/model/selector";
import {
    setOrder,
    setSort,
} from "../../../../features/SearchRepositories/model/slice";
import { Repository } from "../../model/types";
import { SortKey } from "../../../../features/SearchRepositories/model/types";
import { Pagination } from "../../../../shared/ui/Pagination";

const tableHead = [
    { label: "Число форков", key: "forks" },
    { label: "Число звезд", key: "stars" },
    { label: "Дата обновления", key: "updated" },
];

export const RepositoryTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(querySelectors.selectQuery);
    const sort = useAppSelector(querySelectors.selectSort);
    const order = useAppSelector(querySelectors.selectOrder);
    const per_page = useAppSelector(querySelectors.selectPerPage);
    const page = useAppSelector(querySelectors.selectPage);

    const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

    const repositories = useAppSelector(selectRepos);
    const totalCount = useAppSelector(selectCountRepos);

    const handleRowClick = (index: number, repo: Repository) => {
        dispatch(setCurrentRepo(repo));
        setSelectedRow(index);
    };

    React.useEffect(() => {
        dispatch(fetchRepositories({ query, sort, order, per_page, page }));
    }, [page, per_page, query, sort, order]);

    const handleRequestSort = (property: SortKey) => {
        if (sort === property) {
            dispatch(setOrder(order === "asc" ? "desc" : "asc"));
        } else {
            dispatch(setSort(property));
            dispatch(setOrder("desc"));
        }
    };

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
                                    <TableCell>Название</TableCell>
                                    <TableCell>Язык</TableCell>
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
                                                    handleRequestSort(
                                                        item.key as SortKey
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {repositories.map((repo, index) => (
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
                <div className={styles.loading}>
                    <p>Ищем репозиторий...</p>
                </div>
            )}
        </div>
    );
};
