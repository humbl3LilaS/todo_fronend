import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select.tsx";
import SortBtn from "@/components/button/SortBtn.tsx";

export default function SortSelectBox() {
    return (
        <Select>
            <SelectTrigger className={"w-fit p-0"}>
                <SortBtn/>
            </SelectTrigger>
            <SelectContent className={"border-0 outline-0"}>
                <SelectItem value={"importance"}>
                    Importance
                </SelectItem>
                <SelectItem value={"due"}>Due date</SelectItem>
                <SelectItem value={"alphabetically"}>Alphabetically</SelectItem>
                <SelectItem value={"createdDate"}>Creation Date</SelectItem>
            </SelectContent>
        </Select>
    );
}