import React from "react";
import { Chip, Typography, Box } from "@mui/material";
import styles from "./RepositoryDetails.module.scss";
import StarIcon from "@mui/icons-material/Star";

const repoDetails = {
    name: "Название репозитария",
    language: "Python",
    stars: 9800000,
    tags: ["cli", "ARV", "data"],
    license: "GPL-3.0 license",
};

export const RepositoryDetails: React.FC = () => {
    return (
        <div>
            <Box className={styles.repositoryDetails}>
                <Typography variant="h5" className={styles.name}>
                    {repoDetails.name}
                </Typography>

                <Box className={styles.languageStars}>
                    <Chip
                        label={repoDetails.language}
                        className={styles.languageChip}
                    />
                    <Typography className={styles.stars}>
                        <StarIcon sx={{ color: "#FFB400" }}>
                            {repoDetails.stars}
                        </StarIcon>
                    </Typography>
                </Box>

                <Box className={styles.tags}>
                    {repoDetails.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            className={styles.tagChip}
                        />
                    ))}
                </Box>

                <Typography className={styles.license}>
                    {repoDetails.license}
                </Typography>
            </Box>
        </div>
    );
};
