import {redirect} from "react-router-dom";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";
import {useTokenStore} from "@/store/tokenStore.ts";


export const logoutLoader = () => {
    localStorage.removeItem("JWT_KEY");
    return redirect("/");
};

export const authRouteGuard = ({request, params}) => {
    console.log(request);
    const JWT_KEY = localStorage.getItem("JWT_KEY");
    console.log(JWT_KEY);
    if (JWT_KEY) {
        return redirect("/");
    }
    return null;
};