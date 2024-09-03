import {TTodo} from "@/types/apiResponseType.ts";
import axios, {AxiosResponse} from "axios";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";

export const getAllTodo = async () => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY")
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };

    const todos = await axios.request<TTodo[], AxiosResponse<TTodo[]>>({
        baseURL: `${import.meta.env.VITE_API_ENDPOINT}/todos`,
        method: "GET",
        headers: authHeader
    }).then(res => res.data);

    return todos;
};

export const addTodo = async (payload: Partial<TTodo>) => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };
    await axios.request<Partial<TTodo>[], AxiosResponse<Partial<TTodo>[]>>({
        baseURL: `${import.meta.env.VITE_API_ENDPOINT}/todos`,
        method: "POST",
        headers: authHeader,
        data: payload
    });
}

type TUpdateTodo = {
    id: string;
    payload: Partial<TTodo>;
}

export const updateTodo = async ({id, payload}: TUpdateTodo) => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };
    await axios.request<Partial<TTodo>, AxiosResponse<Partial<TTodo>>>(
        {
            baseURL: `${import.meta.env.VITE_API_ENDPOINT}/todos/${id}`,
            method: "PUT",
            headers: authHeader,
            data: payload
        }
    )
}

export const deleteTodo = async ({id}: { id: string }) => {
    const {value: JWT_TOKEN} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const authHeader = {
        "Authentication": `Bearer ${JWT_TOKEN?.accessToken}`
    };

    await axios.request({
        baseURL: `${import.meta.env.VITE_API_ENDPOINT}/todos/${id}`,
        method: "DELETE",
        headers: authHeader,
    })
}