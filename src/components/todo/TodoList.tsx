import {useTodoStore} from "@/store/todoStore.ts";
import TodoListItem from "@/components/todo/TodoListItem.tsx";

export default function TodoList() {
    const {unFinishedTodos} = useTodoStore();
    return (
        <div className={"p-4 mt-4"}>
            <ul className={"flex flex-col gap-y-5"}>
                {unFinishedTodos && unFinishedTodos.map(todo => <TodoListItem context={todo} key={todo._id}/>)}
            </ul>
        </div>
    )
}
