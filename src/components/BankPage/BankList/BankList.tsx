import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loadBanks } from "../../../store/sagas/bankSaga/bankSagaModel";
import { getBanks } from "../../../store/banksReducer/banksReducer";
import { getIsLoading } from "../../../store/appReducer/appReducer";

export const BankList: React.FC = () => {
    const dispatch = useAppDispatch();

    const banks = useAppSelector(getBanks);
    const isLoading = useAppSelector(getIsLoading);

    const updateBanks = useCallback(() => dispatch(loadBanks()), [dispatch]);

    useEffect(() => {
        updateBanks();
    }, [updateBanks]);

    if (!isLoading) console.log(banks);
    return <></>;
};
