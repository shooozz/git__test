import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { Footer } from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RepositoryTable } from "../components/RepositoryTable/RepositoryTable";
import { RepositoryDetails } from "../components/RepositoryDetails/RepositoryDetails";
import { useSelector } from "react-redux";
import { selectReposStatus } from "../redux/repo/selector";

const repoDetails = {
    name: "Название репозитария",
    language: "Python",
    stars: 9800000,
    tags: ["cli", "ARV", "data"],
    license: "GPL-3.0 license",
};

export const HomePage: React.FC = () => {
    const status = useSelector(selectReposStatus) === "idle";

    return (
        <>
            <SearchBar />
            <div className="main">
                {status ? (
                    <Welcome />
                ) : (
                    <>
                        <RepositoryTable />
                        <RepositoryDetails
                            name={repoDetails.name}
                            language={repoDetails.language}
                            stars={repoDetails.stars}
                            tags={repoDetails.tags}
                            license={repoDetails.license}
                        />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};
