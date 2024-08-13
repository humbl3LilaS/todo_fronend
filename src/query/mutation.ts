import {useMutation, useQueryClient} from "react-query";
import {addTodo} from "@/query/todoApi.ts";

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTodo, onSuccess: async () => {
            await queryClient.invalidateQueries(["todo"])
        }
    })
};