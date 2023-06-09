import React, { useCallback, useEffect, useState } from "react";

import { Button, Container, Dialog } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { BankList } from "./BankList/BankList";
import { AddNewData } from "../AddNewData/AddNewData";
import { responseBankBodyType } from "../../models/ResponseModel";
import { useAppDispatch } from "../../store/hooks";
import { loadBanks } from "../../store/sagas/bankSaga/bankSagaModel";

export const BankPage: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useAppDispatch();

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    const updateBanks = useCallback(() => dispatch(loadBanks()), [dispatch]);

    const responseBodyInitial: responseBankBodyType = { name: "", legalAddress: "", image: "" };

    useEffect(() => {
        updateBanks();
    }, [updateBanks]);

    return (
        <Container sx={{ paddingTop: 10, position: "static" }}>
            <Button variant="outlined" sx={{ position: "absolute", top: 80, right: 16 }} onClick={handleClickOpen}>
                Добавить новый банк <CreateIcon sx={{ ml: 1 }} />
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
                <AddNewData responseBodyInitial={responseBodyInitial} watcher="bank" />
            </Dialog>
            <BankList />
        </Container>
    );
};
