import {useGetAllTodo} from "@/query/query.ts";
import {differenceInDays} from "date-fns";
import {TTodo} from "@/types/apiResponseType.ts";

type FilterOption = "unfinished" | "finished" | "upcoming"

export const useFilteredTodo = ({option}: { option?: FilterOption }): TTodo[] | undefined => {
    const {data: todos} = useGetAllTodo();
    if (!option) {
        return todos;
    }
    switch (option) {
        case "finished":
            return todos?.filter(todo => todo.isFinished);
        case "unfinished":
            return todos?.filter(todo => !todo.isFinished);
        case "upcoming" : {
            const today = new Date().valueOf();
            return todos?.filter(todo => todo.dueAt)
                .filter(todo => {
                    return differenceInDays(todo.dueAt ?? 0, today) > 0
                });
        }
    }
}