import { Box, Button, CircularProgress, Link, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { BankModel } from "../../../models/BankModel";
import { useAppDispatch } from "../../../store/hooks";
import { deleteBankWatcher, loadBankClients } from "../../../store/sagas/bankSaga/bankSagaModel";
import { useSelector } from "react-redux";
import { getBankClient, getIsBankClientsLoading } from "../../../store/banksReducer/banksReducer";

type CurrentBankProps = {
    bank: BankModel;
};

export const CurrentBank: React.FC<CurrentBankProps> = ({ bank }) => {
    const dispatch = useAppDispatch();

    const onDeleteClick = useCallback(() => {
        dispatch(deleteBankWatcher(bank.id));
    }, [bank.id, dispatch]);

    const bankClients = useSelector(getBankClient);
    const isLoading = useSelector(getIsBankClientsLoading);

    const updateBankClients = useCallback(() => dispatch(loadBankClients(bank.id)), [dispatch, bank.id]);

    const bankClientList = bankClients.map((client) => <Link key={client.id}>{client.fullname}</Link>);

    useEffect(() => {
        updateBankClients();
    }, [updateBankClients]);

    return (
        <Box sx={{ padding: 2 }}>
            <Box component={"img"} src={bank.image} alt="bankImage" sx={{ width: 500, height: 350 }} />
            <Typography variant="h3">{bank.name}</Typography>
            <Typography color="text.secondary">{bank.legaladdress}</Typography>
            <Stack>{!isLoading ? bankClientList : <CircularProgress />}</Stack>
            <Stack sx={{ mt: 2 }}>
                <Button variant="outlined" color="info">
                    Редактировать
                </Button>
                <Button variant="outlined" color="error" onClick={onDeleteClick} sx={{ mt: 2 }}>
                    Удалить
                </Button>
            </Stack>
        </Box>
    );
};
