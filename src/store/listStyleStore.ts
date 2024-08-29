import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    style: "list" | "grid",
}

type Action = {
    [key in keyof State as `set${Capitalize<key>}`]: (value: State[key]) => void
}

type TListStyleStore = State & Action;

export const useListStyleStore = create<TListStyleStore>()(
    immer((set) => ({
        style: "list",
        setStyle: (style) => set((state) => {
            console.log("action dispatched: " , style)
            state.style = style
        },)
    }))
)