import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

type StatusSelectorProps = {
    defaultValue: boolean
}

export default function StatusSelector({defaultValue}: StatusSelectorProps) {
    return (
        <Select defaultValue={defaultValue ? "1" : "0"}>
            <SelectTrigger className={"w-[180px]"}>
                <SelectValue placeholder={"Status"}/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={"0"}>On going</SelectItem>
                <SelectItem value={"1"}>Finished</SelectItem>
            </SelectContent>
        </Select>
    )
}