import React, { useState } from "react";

import { Button, Container, Dialog } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { AddNewBank } from "./AddNewBank/AddNewBank";
import { BankList } from "./BankList/BankList";

export const BankPage: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    return (
        <Container sx={{ paddingTop: 10, position: "static" }}>
            <Button variant="outlined" sx={{ position: "absolute", top: 80, right: 16 }} onClick={handleClickOpen}>
                Добавить новый банк <CreateIcon sx={{ ml: 1 }} />
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
                <AddNewBank />
            </Dialog>
            <BankList />
        </Container>
    );
};
