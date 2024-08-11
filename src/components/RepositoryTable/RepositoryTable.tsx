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
import { selectRepos } from "../../redux/repo/selector";
import { format } from "date-fns";

const tableHead = [
    "Название",
    "Язык",
    "Число форков",
    "Число звезд",
    "Дата обновления",
];

interface RepositoryTableProps {
    searchValue: string;
    page: number;
    setPage: (value: number) => void;
    rowsPerPage: number;
    setRowsPerPage: (value: number) => void;
}

export const RepositoryTable: React.FC<RepositoryTableProps> = ({
    searchValue,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}) => {
    const data = useSelector(selectRepos);

    const repositories = data.map((repo) => ({
        forks_count: repo.forks_count,
        language: repo.language,
        name: repo.name,
        stargazers_count: repo.stargazers_count,
        updated_at: format(new Date(repo.updated_at), "dd.MM.yyyy"),
    }));

    return (
        <div className={styles.container}>
            <h1>Результаты поиска</h1>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {tableHead.map((item, index) => (
                                <TableCell key={index}>
                                    <TableSortLabel>{item}</TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repositories.map((repo, index) => (
                            <TableRow key={index}>
                                <TableCell>{repo.name}</TableCell>
                                <TableCell>{repo.language}</TableCell>
                                <TableCell>{repo.forks_count}</TableCell>
                                <TableCell>{repo.stargazers_count}</TableCell>
                                <TableCell>{repo.updated_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                searchValue={searchValue}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
            />
        </div>
    );
};
