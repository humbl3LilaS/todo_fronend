import {useGetAllTodo} from "@/query/query.ts";
import {differenceInDays} from "date-fns";
import {TTodo} from "@/types/apiResponseType.ts";

export type FilterOption = "unfinished" | "finished" | "upcoming" | "all" | "today" | "importance"

export const useFilteredTodo = ({option}: { option: FilterOption }): TTodo[] | undefined => {
    const {data: todos} = useGetAllTodo();

    switch (option) {
        case "finished":
            return todos?.filter(todo => todo.isFinished);
        case "unfinished":
            return todos?.filter(todo => !todo.isFinished);
        case "upcoming" : {
            const today = new Date().valueOf();
            return todos?.filter(todo => todo.dueAt && !todo.isFinished)
                .filter(todo => {
                    return differenceInDays(todo.dueAt ?? 0, today) > 0
                });
        }
        case "today":
            const today = new Date().valueOf();
            return todos?.filter(todo => {
                return differenceInDays(todo.dueAt ?? 0, today) === 0;
            })
        case "importance":
            return todos?.filter(todo => todo.importance)
        case "all":
            return todos;
        default:
            return todos;
    }
}