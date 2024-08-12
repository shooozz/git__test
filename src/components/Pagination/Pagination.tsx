import React from "react";
import styles from "./Pagination.module.scss";
import { TablePagination } from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchRepositories } from "../../redux/repo/slice";
import { useSelector } from "react-redux";
import { setPage, setPerPage } from "../../redux/query/slice";
import { selectCountRepos } from "../../redux/repo/selector";

export const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const { query, per_page, page } = useSelector(
        (state: RootState) => state.queryParams
    );
    const totalCount = useSelector(selectCountRepos);

    React.useEffect(() => {
        dispatch(fetchRepositories({ query, per_page, page }));
    }, [page, per_page, query, dispatch]);
    // Обработчик изменения страницы
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        dispatch(setPage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setPerPage(Number(event.target.value)));
        dispatch(setPage(1));
    };

    return (
        <div className={styles.content}>
            <TablePagination
                component="div"
                count={totalCount}
                page={page as number}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                rowsPerPage={per_page as number}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Rows per page:"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} of ${count}`
                }
                slotProps={{
                    actions: {
                        nextButton: { "aria-label": "Next page" },
                        previousButton: { "aria-label": "Previous page" },
                    },
                }}
            />
        </div>
    );
};
