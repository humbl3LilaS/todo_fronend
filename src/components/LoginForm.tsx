import * as z from "zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {login} from "@/query/authQuery.ts";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {Card} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useNavigate} from "react-router-dom";
import {TTokenInStorage} from "@/types/authType.ts";

const LoginFormSchema = z.object({
    username: z.string({required_error: "Username is required"}).min(3, {message: "Username must be at least 3 characters long"}).max(20, "Username must be at most 20 characters long"),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: "Password must include at least one Capital letter and one special character"}),
});

type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

export function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormSchemaType>({
        resolver: zodResolver(LoginFormSchema),
        mode: "onTouched"
    });

    const {setValue} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const navigate = useNavigate();

    const onSubmit = (data: LoginFormSchemaType) => {

        console.log(data);
        const jwt_key = login(data.username, data.password);
        jwt_key.then(data => setValue({accessToken: data.accessToken, issuedTime: Date.now()}));
        //TODO: Handle login fail case
        return navigate("/");
    };

    return (
        <Card className={"w-1/3 p-10 bg-gray-200 text-stone-800"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col gap-y-3 mb-3"}>
                    <label htmlFor="username" className={"font-bold"}>Username:</label>
                    <Input type="text" id={"username"} {...register("username")}/>
                    {errors.username && <h1>{errors.username.message}</h1>}
                </div>
                <div className={"flex flex-col gap-y-3"}>
                    <label htmlFor="password" className={"font-bold"}>Password:</label>
                    <Input type="password" {...register("password")} id={"password"}/>
                    {errors.password && <h1>{errors.password.message}</h1>}
                </div>
                <Button type={"submit"} className={"mt-4 font-bold"}>Submit</Button>
            </form>
        </Card>
    );
}