import {createContext, ReactNode, useContext, useState} from "react";

type TDateInputContext = {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const DateInputContext = createContext<TDateInputContext | undefined>(undefined);

type TDateInputProviderProps = {
    children: ReactNode
}
export const DateInputProvider = ({children}: TDateInputProviderProps) => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <DateInputContext.Provider value={{date, setDate}}>
            {children}
        </DateInputContext.Provider>
    )
}


export const useDateInput = (): TDateInputContext => {
    const context = useContext(DateInputContext);
    if (!context) {
        throw new Error("useDateInput must be the descendent of DateInputProvider");
    }

    return context;

}