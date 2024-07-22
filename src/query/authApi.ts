import {axiosInstance} from "@/query/axiosInstance.ts";
import {TAuth, TAuthRoute, TLogin, TSignUpForm} from "@/types/authType.ts";
import {AxiosResponse} from "axios";

export const login = async (username: string, password: string) => {
    const jwt_key = await axiosInstance.post<TAuth, AxiosResponse<TAuth>>("/auth/login", {
        username, password
    }).then(res => res.data);
    return jwt_key;
    //TODO: return an error or try to solve an error if login fail
};

export const signup = async (payload: TSignUpForm) => {
    const jwt_key = await axiosInstance.post<TAuth, AxiosResponse<TAuth>>("/auth/signup", payload)
        .then(res => res.data);
    return jwt_key;
};

export const auth = async <T extends TAuthRoute>(path: T, payload: T extends "/auth/login" ? TLogin : TSignUpForm) => {
    const jwt_key = await axiosInstance.post<TAuth, AxiosResponse<TAuth>>(path as string, payload)
        .then(res => res.data);
    return jwt_key;
};