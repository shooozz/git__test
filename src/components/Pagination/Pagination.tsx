import React from "react";
import styles from "./Pagination.module.scss";
import { TablePagination } from "@mui/material";
import { useAppDispatch } from "../../redux/store";
import { fetchRepositories } from "../../redux/repo/slice";

interface PaginationProps {
    searchValue: string;
    page: number;
    setPage: (value: number) => void;
    rowsPerPage: number;
    setRowsPerPage: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    searchValue,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}) => {
    // Стейт для отслеживания текущей страницы и количества строк на страницу
    const dispatch = useAppDispatch();

    const query = {
        query: searchValue,
        page: page,
        per_page: rowsPerPage - 1,
    };

    // Обработчик изменения страницы
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
        dispatch(fetchRepositories(query));
    };

    // Обработчик изменения количества строк на странице
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Возвращаемся на первую страницу при изменении количества строк
        dispatch(fetchRepositories(query));
    };

    return (
        <div className={styles.content}>
            <TablePagination
                component="div"
                count={4} // Общее количество элементов
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Rows per page:"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} of ${count}`
                }
                nextIconButtonProps={{ "aria-label": "Next page" }}
                backIconButtonProps={{ "aria-label": "Previous page" }}
            />
        </div>
    );
};
