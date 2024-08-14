import React from "react";

import { Welcome } from "./ui/Welcome";
import { SearchBar } from "../../features/SearchRepositories/ui/SearchBar";
import { RepositoryTable } from "../../entities/Repository/ui/RepositoriesTable";
import { RepositoryDetails } from "../../entities/Repository/ui/RepositoryDetails";
import { Footer } from "../../shared/ui/Footer";

import { selectReposStatus } from "../../entities/Repository/model/selector";
import { useAppSelector } from "../../app/store";
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
