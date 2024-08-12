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
import { useSelector } from "react-redux";
import { selectCountRepos, selectRepos } from "../../redux/repo/selector";
import { format } from "date-fns";

const tableHead = [
    "Название",
    "Язык",
    "Число форков",
    "Число звезд",
    "Дата обновления",
];

export const RepositoryTable: React.FC = () => {
    const resultsRepo = useSelector(selectRepos);
    const totalCount = useSelector(selectCountRepos);

    const repositories = resultsRepo.map((repo) => ({
        forks_count: repo.forks_count,
        language: repo.language,
        name: repo.name,
        stargazers_count: repo.stargazers_count,
        updated_at: format(new Date(repo.updated_at), "dd.MM.yyyy"),
    }));

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
                                    {tableHead.map((item, index) => (
                                        <TableCell key={index}>
                                            <TableSortLabel>
                                                {item}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {repositories.map((repo, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{repo.name}</TableCell>
                                        <TableCell>{repo.language}</TableCell>
                                        <TableCell>
                                            {repo.forks_count}
                                        </TableCell>
                                        <TableCell>
                                            {repo.stargazers_count}
                                        </TableCell>
                                        <TableCell>{repo.updated_at}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination />
                </>
            ) : (
                <>
                    <h1>Не удалось найти репозитории :(</h1>
                </>
            )}
        </div>
    );
};
