import {useSortOption} from "@/store/sortOptionStore.ts";
import {TTodo} from "@/types/apiResponseType.ts";

export const useSortedTodo = (todos: TTodo[] | undefined): TTodo[] | undefined => {
    const {sortBy} = useSortOption();
    switch (sortBy) {
        case "dueDate" :
            return todos && todos.sort((a, b) => {
                if (!a.dueAt && !b.dueAt) return 0;
                if (!a.dueAt) return 1;
                if (!b.dueAt) return -1;
                return b.dueAt - a.dueAt;
            });

    }
    return todos;
}