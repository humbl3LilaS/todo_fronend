import {useListStyleStore} from "@/store/listStyleStore.ts";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";

export default function Todos() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "all"})
    return (
        <>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/>}
        </>
    )
}