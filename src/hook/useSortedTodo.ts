import {TTodo} from "@/types/apiResponseType.ts";
import {useSortOption} from "@/store/sortOptionStore.ts";

export const useSortedTodo = (data: TTodo[] | undefined) => {
    const {sortBy} = useSortOption();
    switch (sortBy) {
        case 'dueDate':
            return data?.slice().sort((a, b) => {
                if (!a.dueAt && !b.dueAt) return 0;
                if (!a.dueAt) return 1;
                if (!b.dueAt) return -1;
                return b.dueAt - a.dueAt;
            });
    }
}