import React, { useCallback, useMemo } from "react";
import { ClientModel } from "../../../models/ClientModel";
import { Button, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { deleteClientWatcher, loadClients } from "../../../store/sagas/clientSaga/clientSagaModel";

type CurrentClientProps = {
    client: ClientModel;
};

export const CurrentClient: React.FC<CurrentClientProps> = ({ client }) => {
    const dispatch = useAppDispatch();

    const TypographyList = useMemo(
        () =>
            Object.entries(client).map((entry) => {
                const [key, value] = entry;
                return (
                    <Stack key={value} flexDirection="row">
                        <Typography variant="body1">
                            {key}: {value}
                        </Typography>
                    </Stack>
                );
            }),
        [client]
    );

    const onDeleteClick = useCallback(() => {
        dispatch(deleteClientWatcher(client.id));
        dispatch(loadClients());
    }, [client.id, dispatch]);

    return (
        <Stack sx={{ padding: 2 }}>
            {TypographyList}
            <Button color="info" variant="outlined" sx={{ mt: 2 }}>
                Редактировать
            </Button>
            <Button color="error" variant="outlined" onClick={onDeleteClick} sx={{ mt: 1 }}>
                Удалить
            </Button>
        </Stack>
    );
};
