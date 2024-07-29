import {redirect} from "react-router-dom";


export const logoutLoader = () => {
    localStorage.removeItem("JWT_KEY");
    return redirect("/");
};