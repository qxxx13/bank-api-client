import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState, useCallback } from "react";
import { addNewBankWatcher, loadBanks } from "../../../store/sagas/bankSaga/bankSagaModel";
import { useAppDispatch } from "../../../store/hooks";

export type responseBankBodyType = {
    name: string;
    legalAddress: string;
    image: string;
};

export const AddNewBank: React.FC = () => {
    const responseBodyInitial: responseBankBodyType = { name: "", legalAddress: "", image: "" };
    const [responseBody, setResponseBody] = useState<responseBankBodyType>(responseBodyInitial);

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
