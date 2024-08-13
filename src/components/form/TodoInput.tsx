import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import DatePicker from "@/components/util/DatePicker.tsx";
import {useState} from "react";
import {useAddTodo} from "@/query/mutation.ts";

type TInput = {
    content: string;
}

export default function TodoInput() {

    const {mutateAsync} = useAddTodo();

    const {handleSubmit, register , resetField} = useForm<TInput>()

    const [date, setDate] = useState<Date | undefined>();

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
                       {...register('content')}
                />
                <Separator className="mb-3 bg-stone-700"/>
                <ul className={"flex justify-start items-center gap-x-6"}>
                    <DatePicker handler={setDate}/>
                    <Button type={"submit"} className={"ml-auto"}>
                        Add
                    </Button>
                </ul>
            </form>
        </div>
    )
}