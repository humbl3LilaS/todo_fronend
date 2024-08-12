import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

type TInput = {
    content: string;
}

export default function TodoInput() {

    const {handleSubmit, register} = useForm<TInput>()

    const onSubmit: SubmitHandler<TInput> = (data) => {
        console.log(data);
    }

    return (
        <div className="w-full p-2 bg-stone-700">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Add a task"
                       className={"w-full py-3 px-4 focus:outline-none bg-stone-500"}
                       {...register('content')}
                />
                <Separator className="mb-3 bg-stone-700"/>
                <ul className={"flex justify-start items-center gap-x-6"}>
                    <div>date</div>
                    <div>priority</div>
                    <Button type={"submit"} className={"ml-auto"}>
                        Add
                    </Button>
                </ul>
            </form>
        </div>
    )
}