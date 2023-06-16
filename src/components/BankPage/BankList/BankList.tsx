import React, { useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { getBanks } from "../../../store/banksReducer/banksReducer";
import { getIsLoading } from "../../../store/appReducer/appReducer";
import { BankListItem } from "./BankListItem/BankListItem";
import { Box, CircularProgress } from "@mui/material";

export const BankList: React.FC = () => {
    const banks = useAppSelector(getBanks);
    const isLoading = useAppSelector(getIsLoading);

    const banksList = useMemo(() => banks.map((bank) => <BankListItem bank={bank} key={bank.id} />), [banks]);

    return <Box sx={{ display: "flex", justifyContent: "space-around" }}>{!isLoading ? banksList : <CircularProgress />}</Box>;
};
