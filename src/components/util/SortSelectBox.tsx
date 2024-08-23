import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select.tsx";
import SortBtn from "@/components/button/SortBtn.tsx";
import {useSortOption} from "@/store/sortOptionStore.ts";

export default function SortSelectBox() {
    const {setSortBy} = useSortOption();
    return (
        <Select onValueChange={setSortBy} defaultValue={"dueDate"}>
            <SelectTrigger className={"w-fit py-2 px-4"}>
                <SortBtn/>
            </SelectTrigger>
            <SelectContent className={"border-0 outline-0"}>
                <SelectItem value={"dueDate"} key={"dueDate"}>Due date</SelectItem>
                <SelectItem value={"importance"} key={"importance"}>Importance</SelectItem>
                <SelectItem value={"alphabetically"} key={"alphabetically"}>Alphabetically</SelectItem>
                <SelectItem value={"creationDate"} key={"creationDate"}>Creation Date</SelectItem>
            </SelectContent>
        </Select>
    );
}