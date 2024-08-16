import React from "react";
import { Chip, Typography, Box } from "@mui/material";
import styles from "./RepositoryDetails.module.scss";
import StarIcon from "@mui/icons-material/Star";
import { useAppSelector } from "../../../../app/store";
import { selectCurrentRepo } from "../../model/selector";

export const RepositoryDetails: React.FC = () => {
    const repoDetails = useAppSelector(selectCurrentRepo);

    return (
        <div className="container">
            <Box className={styles.repositoryDetails}>
                <Typography variant="h5" className={styles.name}>
                    {repoDetails?.name}
                </Typography>

                <Box className={styles.languageStars}>
                    <Chip
                        label={repoDetails?.language}
                        className={styles.languageChip}
                    />
                    <div className={styles.starsCount}>
                        <StarIcon sx={{ color: "#FFB400" }}></StarIcon>
                        <Typography className={styles.stars}>
                            {repoDetails?.stargazers_count}
                        </Typography>
                    </div>
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
        </div>
    );
};
