import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import {auth} from "@/query/authApi.ts";
import {AxiosError} from "axios";
import {useLocalStorage} from "@/hook/useLocalStorage.ts";
import {TTokenInStorage} from "@/types/authType.ts";
import {useNavigate} from "react-router-dom";
import {useToast} from "@/components/ui/use-toast.ts";

const SignUpSchema = z.object({
    username: z.string({required_error: "Username is required"}).min(3, {message: "Username must be at least 3 characters long"}).max(20, "Username must be at most 20 characters long"),
    email: z.string({required_error: "Email is required"}).email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: "Password must include at least one Capital letter and one special character"}),
});

type SingUpSchemaType = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        resetField
    } = useForm<SingUpSchemaType>({resolver: zodResolver(SignUpSchema)});

    const {setValue} = useLocalStorage<TTokenInStorage>("JWT_KEY");
    const navigate = useNavigate();

    const {toast} = useToast();


    const onSubmit: SubmitHandler<SingUpSchemaType> = async (data) => {
        try {
            const jwt_key = await auth("/auth/signup", data);
            setValue({accessToken: jwt_key.accessToken, issuedTime: Date.now()});
            toast({
                description: "Signup Success",
                duration: 2000
            });
            return navigate("/");
        } catch (e) {
            if (e instanceof AxiosError) {
                toast({
                    title: "Signup Fail:",
                    description: e.response?.data.error,
                    duration: 2000
                });
                //@ts-ignore
                resetField("username");
                //@ts-ignore
                resetField("password");
                //@ts-ignore
                resetField("email");
            }
        }
    };

    return (
        <Card className={"w-2/3 max-w-[600px] p-10 bg-gray-200 text-stone-800"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col gap-y-3 mb-3"}>
                    <label htmlFor="username" className={"font-bold"}>Username:</label>
                    <Input type="text" id={"username"} {...register("username")}/>
                    {errors.username && <h1>{errors.username.message}</h1>}
                </div>

                <div className={"flex flex-col gap-y-3 mb-3"}>
                    <label htmlFor="username" className={"font-bold"}>Email:</label>
                    <Input type="text" id={"email"} {...register("email")}/>
                    {errors.email && <h1>{errors.email.message}</h1>}
                </div>

                <div className={"flex flex-col gap-y-3"}>
                    <label htmlFor="password" className={"font-bold"}>Password:</label>
                    <Input type="password" {...register("password")} id={"password"}/>
                    {errors.password && <h1>{errors.password.message}</h1>}
                </div>

                <Button type={"submit"} className={"mt-4 font-bold"} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Sing Up"}
                </Button>

            </form>
        </Card>
    );
}