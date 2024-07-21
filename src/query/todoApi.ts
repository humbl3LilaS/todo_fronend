import {useTokenStore} from "@/store/tokenStore.ts";
import {TTodo} from "@/types/apiResponseType.ts";
import axios, {AxiosResponse} from "axios";

export const getAllTodo = async () => {
    const jwt_token = useTokenStore.getState().token as string;
    const authHeader = {
        "Authentication": `Bearer ${jwt_token}`
    };
    console.log(authHeader);
    // @ts-expect-error i will fix the headers later
    const todos = await axios.request<TTodo[], AxiosResponse<TTodo[]>>({
        baseURL: "http://localhost:3000/api/v1/todos",
        method: "GET",
        headers: authHeader
    }).then(res => res.data);

    return todos;
};