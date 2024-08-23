import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    sortBy: "dueDate" | "priority" | "alphabetically" | "creationDate" | "importance"
    order: "asc" | "desc"
}

type Action = {
    [key in keyof State as `set${Capitalize<key>}`]?: (payload: State[key]) => void
}

type TSortOptionStore = State & Action;

export const useSortOption = create<TSortOptionStore>()(
    immer((set) => ({
        sortBy: "dueDate",
        order: "asc",
        setSortBy: (payload) => (set(state => {
            state.sortBy = payload
        })),
        setOrder: (payload) => (set(state => {
            state.order = payload
        })),
    }))
)