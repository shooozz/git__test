import React from "react";
import { Chip, Typography, Box } from "@mui/material";
import styles from "./RepositoryDetails.module.scss";
import StarIcon from "@mui/icons-material/Star";
import {
    selectRepoDeatilsStatus,
    selectRepoDetails,
} from "../../redux/repoDetails/selector";
import { useAppSelector } from "../../redux/store";

export const RepositoryDetails: React.FC = () => {
    const repoDetails = useAppSelector(selectRepoDetails);
    const status = useAppSelector(selectRepoDeatilsStatus);

    return (
        <div>
            {status === "succeeded" ? (
                <Box className={styles.repositoryDetails}>
                    <Typography variant="h5" className={styles.name}>
                        {repoDetails?.name}
                    </Typography>

                    <Box className={styles.languageStars}>
                        <Chip
                            label={repoDetails?.language}
                            className={styles.languageChip}
                        />
                        <StarIcon sx={{ color: "#FFB400" }}></StarIcon>
                        <Typography className={styles.stars}>
                            {repoDetails?.stargazers_count}
                        </Typography>
                    </Box>

                    <Box className={styles.tags}>
                        {repoDetails?.topics.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                className={styles.tagChip}
                            />
                        ))}
                    </Box>

                    <Typography className={styles.license}>
                        {repoDetails?.license?.name}
                    </Typography>
                </Box>
            ) : (
                <p>Выберите репозитарий</p>
            )}
        </div>
    );
};
