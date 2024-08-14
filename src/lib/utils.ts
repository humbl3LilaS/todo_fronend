import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {addDays, format} from "date-fns";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function addDate(value: string) {
    switch (value) {
        case "0" :
            return "Today";
        case "1" :
            return "Tomorrow";
        default:
            return addDays(new Date(), parseInt(value));

    }
}

export function parseDate(value: string | Date) {
    if (typeof value === "string") {
        return value;
    } else {
        return format(value, "PPP");
    }
}

export function formatDate(value: "Today" | "Tomorrow" | Date | undefined) {
    if (typeof value === "string") {
        switch (value) {
            case "Today":
                return new Date();
            case "Tomorrow":
                return addDays(new Date(), 1);
        }
    } else {
        return value;
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