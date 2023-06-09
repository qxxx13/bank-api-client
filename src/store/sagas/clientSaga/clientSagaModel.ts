import { createAction } from "@reduxjs/toolkit";
import { responseClientBodyType } from "../../../models/ResponseModel";

export const loadClients = createAction("LOAD_CLIENTS");
export const addNewClientWatcher = createAction<responseClientBodyType>("ADD_NEW_CLIENT");
export const deleteClientWatcher = createAction<number>("DELETE_CLIENT");
