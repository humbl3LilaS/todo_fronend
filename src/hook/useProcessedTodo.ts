import {FilterOption, useFilteredTodo} from "@/hook/useFilteredTodo.ts";
import {useSortedTodo} from "@/hook/useSortedTodo.ts";

export const useProcessedTodo = ({filterOption}: { filterOption: FilterOption }) => {
    const filteredTodo = useFilteredTodo({option: filterOption});
    const sortedTodos = useSortedTodo(filteredTodo);
    return sortedTodos;
}