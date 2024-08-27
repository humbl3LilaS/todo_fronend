import {TTodo} from "@/types/apiResponseType.ts";
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


type TodoDetailDialogProps = {
    data: TTodo
}


export default function TodoDetailDialog({data}: TodoDetailDialogProps) {
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
                        <Input id={"content"} defaultValue={data.content} className={"mt-2"}/>
                    </div>
                    <div>
                        <Label htmlFor={"dueDate"} className={"mr-4 text-md capitalize"}>Due date: </Label>
                        <DatePicker defaultValue={data.dueAt}/>
                    </div>
                    <div>
                        <Label htmlFor={"priority"} className={"mr-4 text-md capitalize"}>Priority: </Label>
                    </div>
                </div>
                <DialogFooter>
                    <Button type={"submit"} className={"mt-4 font-bold"}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}