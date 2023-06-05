import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { ClientModel } from "../../../../models/ClientModel";

type ClientItemProps = {
    client: ClientModel;
};

export const ClientItem: React.FC<ClientItemProps> = ({ client }) => {
    console.log(client);
    return (
        <Card sx={{ width: 250 }}>
            <CardActionArea>
                <CardContent>
                    <Typography>{client.fullname}</Typography>
                    <Typography color="text.secondary">{client.address}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
