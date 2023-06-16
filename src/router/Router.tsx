import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { BankPage } from "../components/BankPage/BankPage";
import { ClientPage } from "../components/ClientPage/ClientPage";
import { ATMPage } from "../components/ATMPage/ATMPage";

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routes.bank} element={<BankPage />} />
            <Route path={routes.client} element={<ClientPage />} />
            <Route path={routes.atm} element={<ATMPage />} />
        </Routes>
    );
};
