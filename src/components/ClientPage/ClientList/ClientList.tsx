import React, { useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { getClients } from "../../../store/clientReducer/clientReducer";
import { Box, CircularProgress } from "@mui/material";
import { ClientItem } from "./ClientItem/ClientItem";
import { getIsLoading } from "../../../store/appReducer/appReducer";

export const ClientList: React.FC = () => {
    const clients = useAppSelector(getClients);
    const isLoading = useAppSelector(getIsLoading);

    const clientList = useMemo(() => clients.map((client) => <ClientItem client={client} key={client.id} />), [clients]);

    return <Box sx={{ display: "flex", justifyContent: "space-around" }}>{!isLoading ? clientList : <CircularProgress />}</Box>;
};
