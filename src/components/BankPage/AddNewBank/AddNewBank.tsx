import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { addNewBank } from "../../../services/apiService";

export type responseBodyType = {
    name: string;
    legalAddress: string;
};

export const AddNewBank: React.FC = () => {
    const responseBodyInitial: responseBodyType = { name: "", legalAddress: "" };
    const [responseBody, setResponseBody] = useState<responseBodyType>(responseBodyInitial);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(responseBody);
        addNewBank(responseBody);
    };

    return (
        <Box component={"form"} noValidate autoCapitalize="off" onSubmit={onSubmitHandler}>
            <Stack sx={{ padding: 2 }}>
                <TextField label="Name" id="name" name="name" required onChange={(e) => inputChangeHandler(e)} />
                <TextField
                    label="LegalAddress"
                    id="legalAddress"
                    name="legalAddress"
                    required
                    onChange={(e) => inputChangeHandler(e)}
                />
                <Button variant="outlined" type="submit">
                    Добавить
                </Button>
            </Stack>
        </Box>
    );
};
