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
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return (
        <>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                page={page}
                rowsPerPage={rowsPerPage}
            />
            <div className="main">
                {status ? (
                    <Welcome />
                ) : (
                    <>
                        <RepositoryTable
                            searchValue={searchValue}
                            page={page}
                            setPage={setPage}
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                        />
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
