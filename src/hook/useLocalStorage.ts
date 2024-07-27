export const useLocalStorage = <T>(key: string) => {
    const setValue = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getValue = (): T | undefined => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else {
            return undefined;
        }

    };
    const item = localStorage.getItem(key);
    const value: T | undefined = JSON.parse(item) ?? undefined;


    return {setValue, getValue, value};
};