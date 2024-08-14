import React from "react";
import { Provider } from "react-redux";
import { store } from "../store"; // путь до файла store

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <Provider store={store}>{children}</Provider>;
};
