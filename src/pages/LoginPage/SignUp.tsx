import SignUpForm from "@/pages/LoginPage/SignUpForm.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

export default function SignUp() {
    return (
        <section className={"w-screen h-screen flex justify-center items-center"}>
            <SignUpForm/>
            <Toaster/>
        </section>
    );
}