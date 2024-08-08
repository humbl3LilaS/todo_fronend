import {TTodo} from "@/types/apiResponseType.ts";
import axios, {AxiosResponse} from "axios";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";

export const getAllTodo = async () => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY")
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };

    // @ts-ignore
    const todos = await axios.request<TTodo[], AxiosResponse<TTodo[]>>({
        baseURL: "http://localhost:3000/api/v1/todos",
        method: "GET",
        headers: authHeader
    }).then(res => res.data);

    return todos;
};