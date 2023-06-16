import { AxiosResponse } from "axios";
import { axiosInstance } from "./apiService";
import { BankModel } from "../models/BankModel";
import { responseBankBodyType } from "../models/ResponseModel";

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

export const fetchClientsByBankCode = (bankCode: number) => {
    const bankClients = axiosInstance.get(`/bankclients/${bankCode}`).then((response) => response.data);
    return bankClients;
};

export const updateBank = (data: BankModel) => {
    axiosInstance.put(`/bank`, data).then((response) => console.log(response));
};
