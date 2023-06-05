import { createAction } from "@reduxjs/toolkit";
import { responseBankBodyType } from "../../../components/BankPage/AddNewBank/AddNewBank";

export const loadBanks = createAction("LOAD_BANKS");
export const addNewBankWatcher = createAction<responseBankBodyType>("ADD_NEW_BANK");
export const deleteBankWatcher = createAction<number>("DELETE_BANK");
