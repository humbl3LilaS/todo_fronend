import {useQuery} from "react-query";
import {getAllTodo} from "@/query/todoApi.ts";

export const useGetAllTodo = () => useQuery("todo", {queryFn: getAllTodo});