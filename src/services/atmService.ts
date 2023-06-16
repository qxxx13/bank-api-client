import { responseATMBodyType } from "../models/ResponseModel";
import { axiosInstance } from "./apiService";

export const fetchAllATM = () => {
    const atm = axiosInstance.get("/atm").then((response) => response.data);
    return atm;
};

export const addNewATM = (data: responseATMBodyType) => {
    axiosInstance.post("/atm", data).then((response) => console.log(response));
};

export const deleteATM = (id: number) => {
    axiosInstance.delete(`/atm/${id}`).then((response) => console.log(response));
};
