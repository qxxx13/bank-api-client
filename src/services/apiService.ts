import axios, { AxiosResponse } from "axios";
import { BankModel } from "../models/BankModel";
import { responseBankBodyType } from "../components/BankPage/AddNewBank/AddNewBank";
import { ClientModel } from "../models/ClientModel";
import { responseClientBodyType } from "../components/ClientPage/AddNewClient/AddNewClient";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 30000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchBanks = (): Promise<AxiosResponse<BankModel[]>> => {
    const banks = axiosInstance.get(`/bank`).then((res) => res.data);
    return banks;
};

export const addNewBank = (responseBody: responseBankBodyType) => {
    axiosInstance.post(`/bank`, responseBody).then((response) => console.log(response));
};

export const deleteBank = (id: number) => {
    axiosInstance.delete(`/bank/${id}`).then((response) => console.log(response));
};

export const fetchClients = (): Promise<AxiosResponse<ClientModel[]>> => {
    const clients = axiosInstance.get(`/client`).then((response) => response.data);
    return clients;
};

export const addNewClient = (responseBody: responseClientBodyType) => {
    axiosInstance.post(`/client`, responseBody).then((response) => console.log(response));
};
