import {LoginForm} from "@/components/LoginForm.tsx";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";

export default function Login() {
    const {getValue} = useLocalStorage("JWT_KEY");

    const JWT_KEY = getValue();

    return (
        <section className={"w-screen h-screen flex justify-center items-center"}>
            {JWT_KEY && <h1>Welcome</h1>}
            {!JWT_KEY && <LoginForm/>}
        </section>
    );
}