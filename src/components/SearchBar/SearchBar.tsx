import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./SearchBar.module.scss";
import { fetchRepositories } from "../../redux/repo/slice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { setSearchValue } from "../../redux/query/slice";

export const SearchBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const { query, sort, order, per_page, page } = useAppSelector(
        (state: RootState) => state.queryParams
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.target.value));
    };

    const handleSearch = () => {
        if (query) {
            dispatch(
                fetchRepositories({
                    query,
                    sort,
                    order,
                    per_page,
                    page,
                })
            );
        } else {
            alert("Вы не ввели название репозитория");
        }
    };
    return (
        <div className={styles.searchBar}>
            <TextField
                variant="outlined"
                placeholder="Введите поисковый запрос"
                className={styles.searchInput}
                value={query}
                onChange={handleInputChange}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f2f2f2",
                        borderRadius: "4px",
                        padding: "0px 0px",
                        margin: "0px 8px 0px 0px",
                        "& fieldset": {
                            borderColor: "transparent",
                            padding: "0px 0px",
                        },
                    },
                }}
            />
            <Button
                variant="contained"
                color="primary"
                className={styles.searchButton}
                onClick={handleSearch}
            >
                ИСКАТЬ
            </Button>
        </div>
    );
};
