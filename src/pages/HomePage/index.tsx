import React from "react";

import { Welcome } from "./ui/Welcome";
import { SearchBar } from "../../features/SearchRepositories/ui/SearchBar";
import { RepositoryTable } from "../../entities/Repository/ui/RepositoriesTable";
import { RepositoryDetails } from "../../entities/Repository/ui/RepositoryDetails";
import { Footer } from "../../shared/ui/Footer";

import { useAppSelector } from "../../app/store";
import { Grid } from "@mui/material";
import styles from "./HomePage.module.scss";
import { querySelectors } from "../../features/SearchRepositories/model/selector";
import {
    selectCurrentRepo,
    selectReposStatus,
} from "../../entities/Repository/model/selector";

export const HomePage: React.FC = () => {
    const query = useAppSelector(querySelectors.selectQuery);
    const status = useAppSelector(selectReposStatus);
    const repoDetails = useAppSelector(selectCurrentRepo);

    return (
        <div className={styles.pageContainer}>
            <Grid container direction="column" className={styles.container}>
                <SearchBar />
                <Grid item className={styles.content}>
                    {query === "" ? (
                        <Welcome />
                    ) : (
                        <Grid
                            container
                            spacing={2}
                            className={
                                status === "loading"
                                    ? styles.repositoryContainer
                                    : ""
                            }
                        >
                            <Grid item xs={12} md={9}>
                                <RepositoryTable />
                            </Grid>
                            {repoDetails ? (
                                <Grid
                                    item
                                    xs={12}
                                    md={3}
                                    className={styles.repoDetailsContainer}
                                >
                                    <RepositoryDetails />
                                </Grid>
                            ) : (
                                <Grid
                                    item
                                    xs={12}
                                    md={3}
                                    className={styles.repoDetailsText}
                                >
                                    <p>Выберите репозитарий</p>
                                </Grid>
                            )}
                        </Grid>
                    )}
                </Grid>
                <Footer />
            </Grid>
        </div>
    );
};
