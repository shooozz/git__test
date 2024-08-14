import React from "react";

import { HomePage } from "../pages/HomePage";
import "../styles/global.scss";
import { StoreProvider } from "./providers/StoreProvider";

export const App: React.FC = () => {
    return (
        <div>
            <StoreProvider>
                <HomePage />
            </StoreProvider>
        </div>
    );
};
