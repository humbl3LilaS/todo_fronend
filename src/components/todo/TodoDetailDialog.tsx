import {Priority, TTodo} from "@/types/apiResponseType.ts";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {cn} from "@/lib/utils.ts";
import DatePicker from "@/components/util/DatePicker.tsx";
import PrioritySelector from "@/components/util/PrioritySelector.tsx";
import StatusSelector from "@/components/util/StatusSelector.tsx";
import {useRef, useState} from "react";
import {produce} from "immer";
import {useDateInput} from "@/provider/dateInputProvider.tsx";
import {useUpdateTodo} from "@/query/mutation.ts";


type TodoDetailDialogProps = {
    data: TTodo
}

type TEditTodo = {
    priority: Priority | undefined;
    isFinished: boolean;
}


export default function TodoDetailDialog({data}: TodoDetailDialogProps) {

    const {date} = useDateInput();

    const {mutateAsync} = useUpdateTodo();

    const [editTodo, setEditTodo] = useState<TEditTodo>({
        priority: data.priority,
        isFinished: data.isFinished,
    })

    const input = useRef<HTMLInputElement>(null);


    const handler = <T extends keyof TEditTodo>(prop: T) => (payload: TEditTodo[T]) => {
        setEditTodo(produce(draft => {
            draft[prop] = payload;
        }))
    }

    const submitHandler = async () => {
        if (input?.current?.value) {
            await mutateAsync({
                id: data._id,
                payload: {
                    content: input.current?.value,
                    dueAt: date?.valueOf(),
                    priority: editTodo.priority,
                    isFinished: editTodo.isFinished,
                }
            })
        }
    }


    return (
        <Dialog>
            <DialogTrigger asChild={true}>
                <Button variant={"link"} className={"px-0"}>
                    <span
                        className={cn("text-lg", data.isFinished && "line-through text-red-500")}
                    >
                        {data.content}
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className={"mb-4"}>
                    <DialogTitle>Edit Todo</DialogTitle>
                </DialogHeader>
                <div>
                    <div className={"mb-4"}>
                        <Label htmlFor="content" className={"text-md capitalize"}>content</Label>
                        <Input id={"content"} defaultValue={data.content} className={"mt-2"} ref={input}/>
                    </div>
                    <div className={"mb-4 flex justify-start items-center"}>
                        <Label htmlFor={"dueDate"} className={"w-[120px] mr-4 text-md capitalize"}>Due date: </Label>
                        <DatePicker defaultValue={data.dueAt}/>
                    </div>
                    <div className={"mb-4 flex justify-start items-center"}>
                        <Label htmlFor={"priority"} className={"w-[120px] mr-4 text-md capitalize"}>Priority: </Label>
                        <PrioritySelector defaultValue={data.priority} handler={handler("priority")}/>
                    </div>
                    <div className={"mb-4 flex justify-start items-center"}>
                        <Label htmlFor={"status"} className={"w-[120px] mr-4 text-md capitalize"}>Status: </Label>
                        <StatusSelector defaultValue={data.isFinished} handler={handler("isFinished")}/>
                    </div>
                </div>
                <DialogFooter>
                    <Button type={"submit"} className={"font-bold"} onClick={submitHandler}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}