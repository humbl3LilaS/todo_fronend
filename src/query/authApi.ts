import {axiosInstance} from "@/query/axiosInstance.ts";
import {TAuth, TAuthRoute, TLogin, TSignUp} from "@/types/authType.ts";
import {AxiosResponse} from "axios";


export const auth = async <T extends TAuthRoute>(path: T, payload: T extends "/auth/login" ? TLogin : TSignUp) => {
    const jwt_key = await axiosInstance.post<TAuth, AxiosResponse<TAuth>>(path, payload)
        .then(res => res.data);
    return jwt_key;
};