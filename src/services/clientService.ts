import { AxiosResponse } from "axios";
import { axiosInstance } from "./apiService";
import { ClientModel } from "../models/ClientModel";
import { responseClientBodyType } from "../models/ResponseModel";

export const fetchClients = (): Promise<AxiosResponse<ClientModel[]>> => {
    const clients = axiosInstance.get(`/client`).then((response) => response.data);
    return clients;
};

export const addNewClient = (responseBody: responseClientBodyType) => {
    axiosInstance.post(`/client`, responseBody).then((response) => console.log(response));
};

export const deleteClient = (id: number) => {
    axiosInstance.delete(`/client/${id}`).then((response) => console.log(response));
};

export const updateClient = (data: ClientModel) => {
    axiosInstance.put(`/client`, data).then((response) => console.log(response));
};
