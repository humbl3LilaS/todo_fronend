import axios, {AxiosResponse} from "axios";
import {TUser} from "@/types/apiResponseType.ts";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";

export const getUser = async () => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY")
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };

    // @ts-ignore
    const user = await axios.request<TUser, AxiosResponse<TUser>>({
        baseURL: `${import.meta.env.VITE_API_ENDPOINT}/user/me`,
        method: "GET",
        headers: authHeader
    }).then(res => res.data);

    return user;
};