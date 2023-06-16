import { createAction } from "@reduxjs/toolkit";
import { responseATMBodyType } from "../../../models/ResponseModel";

export const loadATM = createAction("LOAD_ATM");
export const addNewATMWather = createAction<responseATMBodyType>("ADD_NEW_ATM");
export const deleteATMWathcer = createAction<number>("DELETE_ATM");
