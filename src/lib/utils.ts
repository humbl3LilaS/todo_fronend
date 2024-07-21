import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
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