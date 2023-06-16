import { Button, Container, Dialog } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { useAppDispatch } from "../../store/hooks";
import { AddNewData } from "../AddNewData/AddNewData";
import { responseATMBodyType } from "../../models/ResponseModel";
import { loadATM } from "../../store/sagas/atmSaga/atmSagaModel";
import { ATMList } from "./ATMList/ATMList";

export const ATMPage: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useAppDispatch();

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    const updateATM = useCallback(() => dispatch(loadATM()), [dispatch]);

    const responseBodyInitial: responseATMBodyType = { address: "", bankCode: 1 };

    useEffect(() => {
        updateATM();
    }, [updateATM]);

    return (
        <Container sx={{ paddingTop: 10, position: "static" }}>
            <Button variant="outlined" sx={{ position: "absolute", top: 80, right: 16 }} onClick={handleClickOpen}>
                Добавить новый банкомат <CreateIcon sx={{ ml: 1 }} />
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
                <AddNewData responseBodyInitial={responseBodyInitial} watcher="atm" />
            </Dialog>
            <ATMList />
        </Container>
    );
};
