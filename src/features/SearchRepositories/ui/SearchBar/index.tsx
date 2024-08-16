import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import styles from "./SearchBar.module.scss";
import { useAppDispatch } from "../../../../app/store";
import { setSearchValue } from "../../model/slice";

export const SearchBar: React.FC = () => {
    const dispatch = useAppDispatch();

    const [value, setValue] = React.useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSearch = () => {
        dispatch(setSearchValue(value));
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.searchBar}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                    <TextField
                        variant="outlined"
                        placeholder="Введите поисковый запрос"
                        className={styles.searchInput}
                        value={value}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.searchButton}
                        onClick={handleSearch}
                    >
                        ИСКАТЬ
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};
