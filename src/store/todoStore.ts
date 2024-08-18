import {TTodo} from "@/types/apiResponseType.ts";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    todos: TTodo[] | undefined;
    unFinishedTodos: TTodo[] | undefined;
}

type Action = {
    setTodos: (todo: TTodo[]) => void;
}

type TodoStore = State & Action;


export const useTodoStore = create<TodoStore>()(
    immer((set) => ({
        todos: [],
        unFinishedTodos: [],
        setTodos: (payload) => set((state) => {
            state.todos = payload;
            state.unFinishedTodos = payload.filter(todo => !todo.isFinished);
        }),
    }))
)