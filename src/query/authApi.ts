import {TAuth, TAuthRoute, TLogin, TSignUp} from "@/types/authType.ts";
import axios, {AxiosResponse} from "axios";


export const auth = async <T extends TAuthRoute>(path: T, payload: T extends "/auth/login" ? TLogin : TSignUp) => {
    const jwt_key = await axios.request<TAuth, AxiosResponse<TAuth>>(
        {
            baseURL: `${import.meta.env.VITE_API_ENDPOINT}${path}`,
            method: "POST",
            data: payload,
        }
    ).then(res => res.data);
    return jwt_key;
};