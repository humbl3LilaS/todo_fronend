import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger} from "@/components/ui/select.tsx";
import {SelectValue} from "@radix-ui/react-select";
import {Priority} from "@/types/apiResponseType.ts";

type PrioritySelectorProps = {
    defaultValue?: Priority | undefined;
    handler: (payload: Priority | undefined) => void;
}

export default function PrioritySelector({defaultValue, handler}: PrioritySelectorProps) {

    return (
        <Select defaultValue={defaultValue?.toString()}
                onValueChange={(value: string) => {
                    handler(parseInt(value) as Priority | undefined);
                }}
        >

            <SelectTrigger className={"w-[180px]"}>
                <SelectValue placeholder={"Select Priority"}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value={"5"}>5</SelectItem>
                    <SelectItem value={"4"}>4</SelectItem>
                    <SelectItem value={"3"}>3</SelectItem>
                    <SelectItem value={"2"}>2</SelectItem>
                    <SelectItem value={"1"}>1</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}