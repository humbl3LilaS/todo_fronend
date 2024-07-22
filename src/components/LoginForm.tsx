import * as z from "zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {auth} from "@/query/authApi.ts";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {Card} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Link, useNavigate} from "react-router-dom";
import {TTokenInStorage} from "@/types/authType.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {AxiosError} from "axios";

const LoginFormSchema = z.object({
    email: z.string({required_error: "Email is required"}).email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: "Password must include at least one Capital letter and one special character"}),
});

type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

export function LoginForm() {
    const {register, handleSubmit, formState: {errors, isSubmitting}, resetField} = useForm<LoginFormSchemaType>({
        resolver: zodResolver(LoginFormSchema),
        mode: "onTouched"
    });

    const {setValue} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const navigate = useNavigate();

    const {toast} = useToast();

    const onSubmit = async (data: LoginFormSchemaType) => {

        try {
            const jwt_key = await auth("/auth/login", data);
            setValue({accessToken: jwt_key.accessToken, issuedTime: Date.now()});
            toast({
                description: "Login Success",
                duration: 2000
            });
            return navigate("/");
        } catch (e) {
            if (e instanceof AxiosError) {

                toast({
                    title: "Login Fail:",
                    description: e.response?.data.error,
                    duration: 2000
                });
                //@ts-ignore
                resetField("email");
                //@ts-ignore
                resetField("password");
            }
        }

    };

    return (
        <Card className={"w-1/3 p-10 bg-gray-200 text-stone-800"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col gap-y-3 mb-3"}>
                    <label htmlFor="username" className={"font-bold"}>Email:</label>
                    <Input type="text" id={"username"} {...register("email")}/>
                    {errors.email && <h1>{errors.email.message}</h1>}
                </div>
                <div className={"flex flex-col gap-y-3"}>
                    <label htmlFor="password" className={"font-bold"}>Password:</label>
                    <Input type="password" {...register("password")} id={"password"}/>
                    {errors.password && <h1>{errors.password.message}</h1>}
                </div>

                <Button type={"submit"} className={"mt-4 font-bold"} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Login"}
                </Button>

                <div className={"mt-4"}>
                    <p className={"pb-1"}>
                        Forget <Link to={"/auth"} className={"text-violet-400 border-b-violet-500 border-b-2"}>
                        Password
                    </Link> ?
                    </p>
                    <p className={"pb-1"}>
                        Don't have an account? <Link to={"/auth/signup"}
                                                     className={"text-violet-400 border-b-violet-500 border-b-2"}>
                        Sign up
                    </Link>
                    </p>
                </div>

            </form>

        </Card>
    );
}