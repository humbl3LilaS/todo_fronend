import {LoginForm} from "@/pages/AuthPage/LoginForm.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

export default function Login() {
    return (
        <section className={"w-screen h-screen flex justify-center items-center"}>
            <LoginForm/>
            <Toaster/>
        </section>
    );
}