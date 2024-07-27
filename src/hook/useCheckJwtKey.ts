import {useEffect} from "react";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";
import {useNavigate} from "react-router-dom";
import {useTokenStore} from "@/store/tokenStore.ts";
import {compareIssuedTime} from "@/lib/utils.ts";

export const useCheckJwtKey = (): void => {
    const {value: JWT_KEY} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const navigate = useNavigate();
    const {setToken} = useTokenStore();
    useEffect(() => {
        if (!JWT_KEY) {
            navigate("/auth/login");
        } else {
            compareIssuedTime(JWT_KEY.issuedTime) ? setToken(JWT_KEY.accessToken) : navigate("/auth/login");
        }
    }, [navigate, JWT_KEY, setToken]);
};