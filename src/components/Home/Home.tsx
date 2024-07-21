import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {compareIssuedTime} from "@/lib/utils.ts";
import {useTokenStore} from "@/store/tokenStore.ts";
import {useGetAllTodo} from "@/query/query.ts";

export default function Home() {
    const {getValue} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const JWT_KEY = getValue();
    const navigate = useNavigate();
    const {setToken} = useTokenStore();
    useEffect(() => {
        if (!JWT_KEY) {
            navigate("/login");
        }
        if (JWT_KEY) {
            compareIssuedTime(JWT_KEY.issuedTime) ? setToken(JWT_KEY.accessToken) : navigate("/login");
        }
    }, [JWT_KEY, navigate, setToken]);

    const {data} = useGetAllTodo();

    return (
        <section>
            <h1>Home</h1>
            {data && data.map(item => <h2 key={item._id}>{item.content}</h2>)}
        </section>
    );
}