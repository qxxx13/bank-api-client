import React, { useCallback, useMemo } from "react";
import { ATMModel } from "../../../models/ATMModel";
import { useAppDispatch } from "../../../store/hooks";
import { Button, Stack, Typography } from "@mui/material";
import { deleteATMWathcer, loadATM } from "../../../store/sagas/atmSaga/atmSagaModel";

type CurrentATMPProps = {
    atm: ATMModel;
};

export const CurrentATM: React.FC<CurrentATMPProps> = ({ atm }) => {
    const dispatch = useAppDispatch();

    const TypographyList = useMemo(
        () =>
            Object.entries(atm).map((entry) => {
                const [key, value] = entry;
                return (
                    <Stack key={value} flexDirection="row">
                        <Typography variant="body1">
                            {key}: {value}
                        </Typography>
                    </Stack>
                );
            }),
        [atm]
    );

    const onDeleteClick = useCallback(() => {
        dispatch(deleteATMWathcer(atm.id));
        dispatch(loadATM());
    }, [atm.id, dispatch]);

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
