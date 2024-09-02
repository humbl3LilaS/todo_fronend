import {useListStyleStore} from "@/store/listStyleStore.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";
import {FilterOption} from "@/hook/useFilteredTodo.ts";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";


type TodosProps = {
    filterOption: FilterOption;
}

export default function Todos({filterOption}: TodosProps) {
    const {style} = useListStyleStore();
    const data = useProcessedTodo({filterOption})
    return (
        <>
            {style === "grid" ? <TodoTable data={data}/> : <TodoList data={data}/>}
        </>
    )
}