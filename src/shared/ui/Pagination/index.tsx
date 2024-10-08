import React from "react";
import styles from "./Pagination.module.scss";
import { TablePagination } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../app/store";
import { selectCountRepos } from "../../../entities/Repository/model/selector";
import {
    setPage,
    setPerPage,
} from "../../../features/SearchRepositories/model/slice";
import { querySelectors } from "../../../features/SearchRepositories/model/selector";

export const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();

    const per_page = useAppSelector(querySelectors.selectPerPage);
    const page = useAppSelector(querySelectors.selectPage);
    const totalCount = useAppSelector(selectCountRepos);

    const handleChangePage = (
        _: React.MouseEvent<HTMLButtonElement> | null,
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
                labelDisplayedRows={
                    ({ from, to, count }) =>
                        `${from - Number(per_page)}-${
                            to - Number(per_page)
                        } of ${count}`
                    // Из-за того, что наша нумерация страниц начинается с 1, а не 0 как это было задумано TablePagination, приходится отнимать per-page, чтобы labelDisplayedRows не выводил значения, будто мы на следующей странице
                }
                slotProps={{
                    actions: {
                        nextButton: { "aria-label": "Next page" },
                        previousButton: {
                            "aria-label": "Previous page",
                            disabled: Number(page) === 1,
                        },
                    },
                }}
            />
        </div>
    );
};
