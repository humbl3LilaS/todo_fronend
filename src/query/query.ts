import {useQuery} from "react-query";
import {getAllTodo} from "@/query/todoApi.ts";
import {getUser} from "@/query/userApi.ts";
import {useTodoStore} from "@/store/todoStore.ts";

export const useGetAllTodo = () => {
    const {setTodos} = useTodoStore();
    return useQuery(["todo"],
        {
            queryFn: getAllTodo,
            staleTime: 3600 * 60 * 60,
            onSuccess: async (data) => {
                setTodos(data);
            }
        }
    )
};

export const useGetUser = () => useQuery(["user"], {queryFn: getUser, staleTime: 3600 * 60 * 60});