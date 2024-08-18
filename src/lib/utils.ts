import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {format, differenceInDays} from "date-fns";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export function parseDate(value: Date) {
    const diff = Math.abs(differenceInDays(new Date().valueOf() , value.valueOf() + 3600 * 4 * 1000));
    switch (diff) {
        case 0 :
            return "Today";
        case 1 :
            return "Tomorrow";
        default:
            return format(value, "PPP");
    }
}

export const compareIssuedTime = (issuedTime: number) => {
    const now = Date.now();
    const oneHour = 1000 * 60 * 60;
    const diff = now - issuedTime;
    if (diff < oneHour) {
        return true;
    }
    return false;
};