import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { Footer } from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RepositoryTable } from "../components/RepositoryTable/RepositoryTable";
import { RepositoryDetails } from "../components/RepositoryDetails/RepositoryDetails";
import { useSelector } from "react-redux";
import { selectReposStatus } from "../redux/repo/selector";

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
                        <RepositoryDetails />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};
