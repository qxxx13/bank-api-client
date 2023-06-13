import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getClients } from "../../../store/clientReducer/clientReducer";
import { loadClients } from "../../../store/sagas/clientSaga/clientSagaModel";
import { Box, CircularProgress } from "@mui/material";
import { ClientItem } from "./ClientItem/ClientItem";
import { getIsLoading } from "../../../store/appReducer/appReducer";

export const ClientList: React.FC = () => {
    const dispatch = useAppDispatch();

    const clients = useAppSelector(getClients);
    const isLoading = useAppSelector(getIsLoading);

    const updateClients = useCallback(() => dispatch(loadClients()), [dispatch]);

    const clientList = useMemo(() => clients.map((client) => <ClientItem client={client} key={client.id} />), [clients]);

    useEffect(() => {
        updateClients();
    }, [updateClients]);

    return <Box sx={{ display: "flex", justifyContent: "space-around" }}>{!isLoading ? clientList : <CircularProgress />}</Box>;
};
