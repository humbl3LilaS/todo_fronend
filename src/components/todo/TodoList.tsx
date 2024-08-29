import TodoListItem from "@/components/todo/TodoListItem.tsx";
import {TTodo} from "@/types/apiResponseType.ts";
import {cn} from "@/lib/utils.ts";

type TodoListProps = {
    data: TTodo[] | undefined;
    completed?: boolean;
    isFullPage?: boolean;
}

export default function TodoList({data, completed, isFullPage}: TodoListProps) {
    return (
        <div className={cn("p-4  overflow-scroll", isFullPage ? "max-h-listContainerLarge" : "max-h-listContainer ")}>
            <ul className={"flex flex-col gap-y-5"}>
                {data && data.map(todo => <TodoListItem context={todo} key={todo._id} completed={completed}/>)}
                {data && data.length === 0 &&
                    <h1 className={"py-5 text-center font-semibold"}>You don't have things todo huu yay!!</h1>}
            </ul>
        </div>
    )
}
