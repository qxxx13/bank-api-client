import { Card, CardActionArea, CardContent, CardMedia, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import { BankModel } from "../../../../models/BankModel";
import { CurrentBank } from "../../CurrentBank/CurrentBank";

type BankListItemProps = {
    bank: BankModel;
};

export const BankListItem: React.FC<BankListItemProps> = ({ bank }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => setOpenDialog(true);

    const handleClose = () => setOpenDialog(false);

    return (
        <Card sx={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardActionArea onClick={handleClickOpen}>
                <CardMedia component="img" height={200} image={bank.image} alt="bankImg" />
                <CardContent>
                    <Typography variant="h5">{bank.name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                        {bank.legaladdress}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Dialog open={openDialog} onClose={handleClose}>
                <CurrentBank bank={bank} />
            </Dialog>
        </Card>
    );
};
