import React from "react";
import { Chip, Typography, Box } from "@mui/material";
import styles from "./RepositoryDetails.module.scss";

interface RepositoryDetailsProps {
    name: string;
    language: string;
    stars: number;
    tags: string[];
    license: string;
}

export const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
    name,
    language,
    stars,
    tags,
    license,
}) => {
    return (
        <div>
            <Box className={styles.repositoryDetails}>
                <Typography variant="h5" className={styles.name}>
                    {name}
                </Typography>

                <Box className={styles.languageStars}>
                    <Chip label={language} className={styles.languageChip} />
                    <Typography className={styles.stars}>★ {stars}</Typography>
                </Box>

                <Box className={styles.tags}>
                    {tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            className={styles.tagChip}
                        />
                    ))}
                </Box>

                <Typography className={styles.license}>{license}</Typography>
            </Box>
        </div>
    );
};
