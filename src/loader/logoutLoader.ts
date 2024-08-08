import {redirect} from "react-router-dom";



export const logoutLoader = () => {
    localStorage.removeItem("JWT_KEY");
    return redirect("/");
};

export const authRouteGuard = () => {
    const JWT_KEY = localStorage.getItem("JWT_KEY");
    if (JWT_KEY) {
        return redirect("/");
    }
    return null;
};