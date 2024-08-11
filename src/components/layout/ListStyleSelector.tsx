import grid from "/icon/grid.svg";
import list from "/icon/list.svg";
import {cn} from "@/lib/utils.ts";
import {useListStyleStore} from "@/store/listStyleStore.ts";


export default function ListStyleSelector() {

    return (
        <ul className={"flex gap-x-4"}>
            <ListStyleSelectBtn imgPath={grid} label={"grid"}/>
            <ListStyleSelectBtn imgPath={list} label={"list"}/>
        </ul>
    )
}


type TLayoutSelectBtnProps = {
    imgPath: string;
    label: "grid" | "list";
}

function ListStyleSelectBtn({imgPath, label}: TLayoutSelectBtnProps) {

    const {style, setStyle} = useListStyleStore();


    const handler = () => {
        setStyle(label);
    }

    return (
        <div aria-label={label} className={cn("py-2 px-4 block m-2 cursor-pointer", style === label && "bg-stone-200")}
             onClick={handler}
        >

            <img src={imgPath} alt={"Nav item icon"} className={"inline-block"}/>
            <span className={"ml-3 capitalize"}>{label}</span>
        </div>

    )
}