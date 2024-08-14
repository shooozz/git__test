import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { Footer } from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RepositoryTable } from "../components/RepositoryTable/RepositoryTable";
import { RepositoryDetails } from "../components/RepositoryDetails/RepositoryDetails";
import { selectReposStatus } from "../redux/repo/selector";
import { useAppSelector } from "../redux/store";

export const HomePage: React.FC = () => {
    const status = useAppSelector(selectReposStatus) === "idle";

    return (
        <div className="container">
            <SearchBar />
            <div className="main">
                {status ? (
                    <Welcome />
                ) : (
                    <>
                        <RepositoryTable />
                        <RepositoryDetails />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};
