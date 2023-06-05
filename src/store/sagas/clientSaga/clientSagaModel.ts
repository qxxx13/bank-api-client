import { createAction } from "@reduxjs/toolkit";
import { responseClientBodyType } from "../../../components/ClientPage/AddNewClient/AddNewClient";

export const loadClients = createAction("LOAD_CLIENTS");
export const addNewClientWatcher = createAction<responseClientBodyType>("ADD_NEW_CLIENT");
