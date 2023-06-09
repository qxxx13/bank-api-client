import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { responseBankBodyType, responseClientBodyType } from "../../models/ResponseModel";
import { useDataAppend } from "../../hooks/useDataAppend";

type AddNewDataProps = {
    responseBodyInitial: responseBankBodyType | responseClientBodyType;
    watcher: "bank" | "client";
};

export const AddNewData: React.FC<AddNewDataProps> = ({ responseBodyInitial, watcher }) => {
    const [responseBody, setResponseBody] = useState<typeof responseBodyInitial>(responseBodyInitial);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    };

    const dispatchData = useDataAppend(watcher, responseBody);

    //? Как передать диспатч разных watcher'ов в функцию

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatchData();
    };

    const textFields = Object.keys(responseBodyInitial).map((keys) => <TextField sx={{ mt: 1 }} label={keys} id={keys} name={keys} required onChange={inputChangeHandler} key={keys} />);

    return (
        <Box component={"form"} autoCapitalize="off" onSubmit={onSubmitHandler}>
            <Stack sx={{ padding: 2 }}>
                {textFields}
                <Button variant="outlined" type="submit" sx={{ mt: 1 }}>
                    Добавить
                </Button>
            </Stack>
        </Box>
    );
};
