import {axiosInstance} from "@/query/axiosInstance.ts";
import {TLogin} from "@/types/authType.ts";
import {AxiosResponse} from "axios";

export const login = async (username: string, password: string) => {
    const jwt_key = await axiosInstance.post<TLogin, AxiosResponse<TLogin>>("/auth/login", {
        username, password
    }).then(res => res.data);
    return jwt_key;
    //TODO: return an error or try to solve an error if login fail
};