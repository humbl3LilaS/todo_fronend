import TodoListItem from "@/components/todo/TodoListItem.tsx";
import {TTodo} from "@/types/apiResponseType.ts";

type TodoListProps = {
    data: TTodo[] | undefined;
    completed?: boolean;
}

export default function TodoList({data, completed}: TodoListProps) {
    return (
        <div className={"p-4 mt-4"}>
            <ul className={"flex flex-col gap-y-5"}>
                {data && data.map(todo => <TodoListItem context={todo} key={todo._id} completed={completed}/>)}
            </ul>
        </div>
    )
}
