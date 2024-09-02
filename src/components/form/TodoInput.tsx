import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useAddTodo} from "@/query/mutation.ts";
import {useDateInput} from "@/provider/dateInputProvider.tsx";
import {memo} from "react";

type TInput = {
    content: string;
}

type TodoInputProps = {
    children?: React.ReactNode;
}

function TodoInput({children}: TodoInputProps) {

    const {mutateAsync} = useAddTodo();

    const {
        handleSubmit,
        register,
        resetField,
        formState: {isValid}
    } = useForm<TInput>()

    const {date, setDate} = useDateInput();


    const onSubmit: SubmitHandler<TInput> = async (data) => {
        await mutateAsync({
            content: data.content, dueAt: date?.valueOf()
        });
        setDate(undefined);
        resetField("content")
    }

    return (
        <div className="w-full p-2 bg-stone-700">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Add a task"
                       className={"w-full py-3 px-4 focus:outline-none bg-stone-500"}
                       {...register('content', {required: true})}
                />
                <Separator className="mb-3 bg-stone-700"/>
                <ul className={"flex justify-start items-center gap-x-6"}>
                    {children}
                    <Button type={"submit"} className={"ml-auto"} disabled={!isValid}>
                        Add
                    </Button>
                </ul>
            </form>
        </div>
    )
}

export default memo(TodoInput);