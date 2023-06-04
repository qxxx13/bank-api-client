import axios, { AxiosResponse } from "axios";
import { BankModel } from "../models/BankModel";
import { responseBodyType } from "../components/BankPage/AddNewBank/AddNewBank";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 30000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchBanks = (): Promise<AxiosResponse<BankModel>> => {
    const banks = axiosInstance.get(`/bank`).then((res) => res.data);
    return banks;
};

export const addNewBank = (responseBody: responseBodyType) => {
    axiosInstance.post(`/bank`, responseBody).then((response) => console.log(response));
};

export const deleteBank = (id: number) => {
    axiosInstance.delete(`/bank/${id}`).then((response) => console.log(response));
};
