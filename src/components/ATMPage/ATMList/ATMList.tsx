import { Box, CircularProgress } from "@mui/material";
import React, { useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { getATM } from "../../../store/atmReducer/atmReducer";
import { getIsLoading } from "../../../store/appReducer/appReducer";
import { ATMItem } from "./ATMItem/ATMItem";

export const ATMList: React.FC = () => {
    const atm = useAppSelector(getATM);
    const isLoading = useAppSelector(getIsLoading);

    const clientList = useMemo(() => atm.map((atm) => <ATMItem atm={atm} key={atm.id} />), [atm]);

    return <Box sx={{ display: "flex", justifyContent: "space-around" }}>{!isLoading ? clientList : <CircularProgress />}</Box>;
};
