import {useTokenStore} from "@/store/tokenStore.ts";
import axios, {AxiosResponse} from "axios";
import {TUser} from "@/types/apiResponseType.ts";

export const getUser = async () => {
    const JWT_TOKEN = useTokenStore.getState().token as string;
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN}`
    };

    // @ts-ignore
    const user = await axios.request<TUser, AxiosResponse<TUser>>({
        baseURL: "http://localhost:3000/api/v1/user/me",
        method: "GET",
        headers: authHeader
    }).then(res => res.data);

    return user;
};