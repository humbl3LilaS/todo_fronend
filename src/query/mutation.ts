import {useMutation, useQueryClient} from "react-query";
import {addTodo, deleteTodo, updateTodo} from "@/query/todoApi.ts";

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["todo"])
        }
    })
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["todo"]);
        }
    })
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries(["todo"]);
        }
    })
}