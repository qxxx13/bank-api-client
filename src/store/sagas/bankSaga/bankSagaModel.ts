import { createAction } from "@reduxjs/toolkit";
import { responseBodyType } from "../../../components/BankPage/AddNewBank/AddNewBank";

export const loadBanks = createAction("LOAD_BANKS");
export const addNewBankWatcher = createAction<responseBodyType>("ADD_NEW_BANK");
export const deleteBankWatcher = createAction<number>("DELETE_BANK");
