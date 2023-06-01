import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { BankPage } from "../components/BankPage/BankPage";

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routes.bank} element={<BankPage />} />
        </Routes>
    );
};
