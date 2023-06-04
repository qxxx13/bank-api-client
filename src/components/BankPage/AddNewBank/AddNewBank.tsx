import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState, useCallback } from "react";
import { addNewBankWatcher, loadBanks } from "../../../store/sagas/bankSaga/bankSagaModel";
import { useAppDispatch } from "../../../store/hooks";

export type responseBodyType = {
    name: string;
    legalAddress: string;
    image: string;
};

export const AddNewBank: React.FC = () => {
    const responseBodyInitial: responseBodyType = { name: "", legalAddress: "", image: "" };
    const [responseBody, setResponseBody] = useState<responseBodyType>(responseBodyInitial);

    const dispatch = useAppDispatch();

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    };

    const onSubmitHandler = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch(addNewBankWatcher(responseBody));
            dispatch(loadBanks());
        },
        [dispatch, responseBody]
    );

    return (
        <Box component={"form"} noValidate autoCapitalize="off" onSubmit={onSubmitHandler}>
            <Stack sx={{ padding: 2 }}>
                <TextField label="Name" id="name" name="name" required onChange={(e) => inputChangeHandler(e)} />
                <TextField
                    sx={{ mt: 1 }}
                    label="LegalAddress"
                    id="legalAddress"
                    name="legalAddress"
                    required
                    onChange={(e) => inputChangeHandler(e)}
                />
                <TextField
                    sx={{ mt: 1 }}
                    label="image"
                    id="image"
                    name="image"
                    required
                    onChange={(e) => inputChangeHandler(e)}
                />
                <Button variant="outlined" type="submit" sx={{ mt: 1 }}>
                    Добавить
                </Button>
            </Stack>
        </Box>
    );
};
