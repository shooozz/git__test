import React from "react";

import { HomePage } from "../pages/HomePage";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const App: React.FC = () => {
    return (
        <div>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </div>
    );
};
