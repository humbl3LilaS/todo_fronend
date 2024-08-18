import sort from "/icon/sort.svg";

export default function SortBtn() {
    return (
            <>
                <img src={sort}
                     alt={"icon of sort btn"}
                    className={"aspect-square w-6"}
                />
                <span className={"ml-2 font-bold"}>Sort</span>
            </>
    );
}