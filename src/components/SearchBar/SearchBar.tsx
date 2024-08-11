import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./SearchBar.module.scss";
import { fetchRepositories } from "../../redux/repo/slice";
import { useAppDispatch } from "../../redux/store";

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    rowsPerPage: number;
    page: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    searchValue,
    setSearchValue,
    page,
    rowsPerPage,
}) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        if (searchValue) {
            dispatch(
                fetchRepositories({
                    query: searchValue,
                    per_page: rowsPerPage,
                    page: page,
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
                value={searchValue}
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
