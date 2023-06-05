import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { BankModel } from "../../../models/BankModel";
import { useAppDispatch } from "../../../store/hooks";
import { deleteBankWatcher, loadBanks } from "../../../store/sagas/bankSaga/bankSagaModel";

type CurrentBankProps = {
    bank: BankModel;
};

export const CurrentBank: React.FC<CurrentBankProps> = ({ bank }) => {
    const dispatch = useAppDispatch();

    const onDeleteClick = useCallback(() => {
        dispatch(deleteBankWatcher(bank.id));
        dispatch(loadBanks());
    }, [bank.id, dispatch]);

    return (
        <Box sx={{ padding: 2 }}>
            <Box component={"img"} src={bank.image} alt="bankImage" sx={{ width: 500, height: 350 }} />
            <Typography variant="h3">{bank.name}</Typography>
            <Typography color="text.secondary">{bank.legaladdress}</Typography>
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
