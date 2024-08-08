import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    const handler = () => {
        navigate("/")
    }

    return (
        <section className={"w-screen h-screen"}>
            <div className={"h-full w-full flex flex-col items-center justify-center gap-y-10"}>
                <h1 className={"font-black text-7xl tracking-widest"}>404</h1>
                <p className={"font-semibold text-xl tracking-widest"}>
                    Your requested page could not be found.
                </p>
                <Button className={"font-semibold text-md tracking-widest"} onClick={handler}>
                    Back To Home Page
                </Button>
            </div>
        </section>
    );
}