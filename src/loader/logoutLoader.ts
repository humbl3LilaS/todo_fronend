import {redirect} from "react-router-dom";
import {TTokenInStorage} from "@/types/authType.ts";
import {compareIssuedTime} from "@/lib/utils.ts";


export const logoutLoader = () => {
    localStorage.removeItem("JWT_KEY");
    return redirect("/");
};

export const authRouteGuard = () => {
    const keyInStorage = localStorage.getItem("JWT_KEY");
    const JWT_KEY: TTokenInStorage | null = keyInStorage ? JSON.parse(keyInStorage) : null;
    if (JWT_KEY?.accessToken && compareIssuedTime(JWT_KEY?.issuedTime)) {
        return redirect("/");
    }
    return null;
};


export const authLoader = () => {
    const keyInStorage = localStorage.getItem("JWT_KEY");
    const JWT_KEY: TTokenInStorage | null = keyInStorage ? JSON.parse(keyInStorage) : null;
    if (JWT_KEY?.accessToken && compareIssuedTime(JWT_KEY?.issuedTime)) {
        return null
    }
    return redirect("/auth/login");
}