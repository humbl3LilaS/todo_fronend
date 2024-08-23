import {TTodo} from "@/types/apiResponseType.ts";
import {useSortOption} from "@/store/sortOptionStore.ts";
import {differenceInDays} from "date-fns";

export const useSortedTodo = (data: TTodo[] | undefined) => {
    const {sortBy} = useSortOption();
    // TODO: add sorting functionality to be sort via asc or desc
    switch (sortBy) {
        case 'dueDate':
            return data?.slice().sort((a, b) => {
                if (!a.dueAt && !b.dueAt) return 0;
                if (!a.dueAt) return 1;
                if (!b.dueAt) return -1;
                return b.dueAt - a.dueAt;
            });
        case "alphabetically":
            return data?.slice().sort((a, b) => {
                return a.content.localeCompare(b.content)
            });
        // TODO: Implement sorting by Importance
        // TODO: Implement sorting by Priority
        case "creationDate":
            return data?.slice().sort((a, b) => {
                if (differenceInDays(a.createdAt, b.createdAt) === 0) return 0;
                return differenceInDays(a.createdAt, b.createdAt) > 0 ? 1 : -1;
            })
        default:
            return data;
    }
}