import { Card, CardActionArea, CardContent, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import { ATMModel } from "../../../../models/ATMModel";
import { CurrentATM } from "../../CurrentATM/CurrentATM";

type ClientItemProps = {
    atm: ATMModel;
};

export const ATMItem: React.FC<ClientItemProps> = ({ atm }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    return (
        <Card sx={{ width: 250, mr: 1 }} elevation={10}>
            <CardActionArea onClick={handleClickOpen} sx={{ height: "100%" }}>
                <CardContent>
                    <Typography>{atm.bankcode}</Typography>
                    <Typography color="text.secondary">{atm.address}</Typography>
                </CardContent>
            </CardActionArea>
            <Dialog open={openDialog} onClose={handleClose}>
                <CurrentATM atm={atm} />
            </Dialog>
        </Card>
    );
};
