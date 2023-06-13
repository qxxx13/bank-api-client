import { Card, CardActionArea, CardContent, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import { ClientModel } from "../../../../models/ClientModel";
import { CurrentClient } from "../../CurrentClient/CurrentClient";

type ClientItemProps = {
    client: ClientModel;
};

export const ClientItem: React.FC<ClientItemProps> = ({ client }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    return (
        <Card sx={{ width: 250, mr: 1 }} elevation={10}>
            <CardActionArea onClick={handleClickOpen} sx={{ height: "100%" }}>
                <CardContent>
                    <Typography>{client.fullname}</Typography>
                    <Typography color="text.secondary">{client.address}</Typography>
                </CardContent>
            </CardActionArea>
            <Dialog open={openDialog} onClose={handleClose}>
                <CurrentClient client={client} />
            </Dialog>
        </Card>
    );
};
