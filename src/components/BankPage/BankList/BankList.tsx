import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loadBanks } from "../../../store/sagas/bankSaga/bankSagaModel";
import { getBanks } from "../../../store/banksReducer/banksReducer";
import { getIsLoading } from "../../../store/appReducer/appReducer";
import { BankListItem } from "./BankListItem/BankListItem";
import { Box, CircularProgress } from "@mui/material";

export const BankList: React.FC = () => {
    const dispatch = useAppDispatch();

    const banks = useAppSelector(getBanks);
    const isLoading = useAppSelector(getIsLoading);

    const updateBanks = useCallback(() => dispatch(loadBanks()), [dispatch]);

    const banksList = useMemo(() => banks.map((bank) => <BankListItem bank={bank} key={bank.id} />), [banks]);

    useEffect(() => {
        updateBanks();
    }, [updateBanks]);

    return (
        <Box sx={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-around" }}>
            {!isLoading ? banksList : <CircularProgress />}
        </Box>
    );
};
