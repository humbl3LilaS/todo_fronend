import {Popover, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn, parseDate} from "@/lib/utils.ts";
import {CalendarIcon} from "lucide-react";
import {PopoverContent} from "@radix-ui/react-popover";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {addDays} from "date-fns";
import {useEffect} from "react";
import {useDateAction, useDateValue} from "@/provider/dateInputProvider.tsx";


type DatePickerProps = {
    defaultValue?: number | undefined;
}

export default function DatePicker({defaultValue}: DatePickerProps) {

    const date = useDateValue();
    const setDate = useDateAction();
    useEffect(() => {
        if (defaultValue) {
            setDate(new Date(defaultValue));
        }
    }, [defaultValue]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-fit justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className={cn("h-4 w-4", date && "mr-2")}/>
                    {date && <span>Due: {parseDate(date)}</span>}
                </Button>
            </PopoverTrigger>

            <PopoverContent className={"z-10"}>
                <Select
                    onValueChange={(value) => {
                        setDate(addDays(new Date(), parseInt(value)));
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                </Select>
                <div className={"bg-stone-200"}>
                    <Calendar
                        mode={"single"}
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                        }}
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
}