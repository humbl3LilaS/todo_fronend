import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

type StatusSelectorProps = {
    defaultValue: boolean,
    handler: (payload: boolean) => void,
}

export default function StatusSelector({defaultValue, handler}: StatusSelectorProps) {
    return (
        <Select defaultValue={defaultValue ? "1" : "0"} onValueChange={(value: string) => {
            value === "1" ? handler(true) : handler(false)
        }}>
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