import React, {createContext, ReactNode, useContext, useState} from "react";

const DateValueContext = createContext<Date | undefined>(undefined);
const DateActionContext = createContext<React.Dispatch<React.SetStateAction<Date | undefined>> | undefined>(undefined);


type TDateInputProviderProps = {
    children: ReactNode
}
export const DateInputProvider = ({children}: TDateInputProviderProps) => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <DateActionContext.Provider value={setDate}>
            <DateValueContext.Provider value={date}>
                {children}
            </DateValueContext.Provider>
        </DateActionContext.Provider>

    )
}

export const useDateValue = (): Date | undefined => {
    const date = useContext(DateValueContext)
    return date;
}

export const useDateAction = (): React.Dispatch<React.SetStateAction<Date | undefined>> => {
    const setDate = useContext(DateActionContext);
    if (!setDate) {
        throw new Error("useDateAction() can only used in the descendant of DateInputProvider ");
    }
    return setDate;
}