import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { ClientModel } from "../../../models/ClientModel";
import { useAppDispatch } from "../../../store/hooks";
import { addNewClientWatcher, loadClients } from "../../../store/sagas/clientSaga/clientSagaModel";

export type responseClientBodyType = Omit<ClientModel, "id">;

export const AddNewClient: React.FC = () => {
    const responseBodyInitial: responseClientBodyType = { fullname: "", cardnumber: 1, address: "", bankcode: 1 };
    const [responseBody, setResponseBody] = useState<responseClientBodyType>(responseBodyInitial);

    const dispatch = useAppDispatch();

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    };

    const textFields = Object.keys(responseBodyInitial).map((keys) => (
        <TextField
            sx={{ mt: 1 }}
            label={keys}
            id={keys}
            name={keys}
            required
            onChange={inputChangeHandler}
            key={keys}
        />
    ));

    const onSubmitHandler = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch(addNewClientWatcher(responseBody));
            dispatch(loadClients());
        },
        [responseBody, dispatch]
    );

    return (
        <Box component={"form"} noValidate autoCapitalize="off" onSubmit={onSubmitHandler}>
            <Stack sx={{ padding: 2 }}>
                {textFields}
                <Button variant="outlined" type="submit" sx={{ mt: 1 }}>
                    Добавить
                </Button>
            </Stack>
        </Box>
    );
};
