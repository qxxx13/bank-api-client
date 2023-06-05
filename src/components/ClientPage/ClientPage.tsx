import { Button, Container, Dialog } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadClients } from "../../store/sagas/clientSaga/clientSagaModel";
import { AddNewClient } from "./AddNewClient/AddNewClient";
import CreateIcon from "@mui/icons-material/Create";
import { ClientList } from "./ClientList/ClientList";

export const ClientPage: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useAppDispatch();

    const handleClose = () => setOpenDialog(false);

    const handleClickOpen = () => setOpenDialog(true);

    const updateClients = useCallback(() => dispatch(loadClients()), [dispatch]);

    useEffect(() => {
        updateClients();
    }, [updateClients]);

    return (
        <Container sx={{ paddingTop: 10, position: "static" }}>
            <Button variant="outlined" sx={{ position: "absolute", top: 80, right: 16 }} onClick={handleClickOpen}>
                Добавить нового клиента <CreateIcon sx={{ ml: 1 }} />
            </Button>
            <Dialog onClose={handleClose} open={openDialog}>
                <AddNewClient />
            </Dialog>
            <ClientList />
        </Container>
    );
};
