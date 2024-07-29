import {useQuery} from "react-query";
import {getAllTodo} from "@/query/todoApi.ts";
import {getUser} from "@/query/userApi.ts";

export const useGetAllTodo = () => useQuery("todo", {queryFn: getAllTodo, staleTime: 3600 * 60 * 60});

export const useGetUser = () => useQuery("user", {queryFn: getUser, staleTime: 3600 * 60 * 60});