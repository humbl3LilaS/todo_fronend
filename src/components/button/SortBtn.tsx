import {Button} from "@/components/ui/button.tsx";
import sort from "/icon/sort.svg";

export default function SortBtn() {
    return (
        <div>
            <Button variant="outline">
                <img src={sort}
                     alt={"icon of sort btn"}
                    className={"aspect-square w-6"}
                />
                <span className={"ml-2 font-bold"}>Sort</span>
            </Button>
        </div>
    );
}