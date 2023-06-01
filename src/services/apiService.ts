import axios, { AxiosResponse } from "axios";
import { BankModel } from "../models/BankModel";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchBanks = (): Promise<AxiosResponse<BankModel>> => {
    const banks = axiosInstance.get(`/bank`).then((res) => res.data);
    return banks;
};
