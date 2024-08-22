import TodoListItem from "@/components/todo/TodoListItem.tsx";
import {useFilteredTodo} from "@/hook/useFilteredTodo.ts";

export default function TodoList() {
    const unFinishedTodos = useFilteredTodo({option: "unfinished"});
    return (
        <div className={"p-4 mt-4"}>
            <ul className={"flex flex-col gap-y-5"}>
                {unFinishedTodos && unFinishedTodos.map(todo => <TodoListItem context={todo} key={todo._id}/>)}
            </ul>
        </div>
    )
}
