import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    token: string | undefined;
}

type Action = {
    [key in keyof State as `set${Capitalize<key>}`]: (value: State[key]) => void;
}


type TTokenStore = State & Action;

export const useTokenStore = create<TTokenStore>()(
    immer((set) => ({
        token: undefined,
        setToken: (value) => set((state) => {
            state.token = value;
        })
    }))
);